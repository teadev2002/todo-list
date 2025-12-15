import { useCallback, useEffect, useMemo, useState } from "react";
import { Input, Select, Pagination, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DBApi } from "./DBApi";
import type { ApiResponse } from "./dragonBallType";
import "./CharacterGlassCard.css";
import type { Character } from "./dragonBallType";
import { Modal } from "antd";

const { Option } = Select;

const TestEx1v3 = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");
  const [sortKi, setSortKi] = useState<"default" | "asc" | "desc">("default");
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState<Character | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  const handleOpenDetail = async (id: number) => {
    setOpen(true);
    setDetailLoading(true);

    try {
      const res = await DBApi.getCharacterById(id);
      setDetail(res.data);
    } finally {
      setDetailLoading(false);
    }
  };

  const fetchData = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const res = await DBApi.getCharacters({ page, limit: 10 });
      setData(res.data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(currentPage);
  }, [fetchData, currentPage]);

  const processedItems = useMemo(() => {
    if (!data) return [];

    const keyword = search.trim().toLowerCase();
    let items = data.items.filter((c) =>
      keyword ? c.name.toLowerCase().includes(keyword) : true
    );

    if (sortKi !== "default") {
      items = [...items].sort((a, b) => {
        const aKi = Number(a.ki);
        const bKi = Number(b.ki);

        if (Number.isNaN(aKi) && Number.isNaN(bKi)) return 0;
        if (Number.isNaN(aKi)) return 1;
        if (Number.isNaN(bKi)) return -1;

        return sortKi === "asc" ? aKi - bKi : bKi - aKi;
      });
    }

    return items;
  }, [data, search, sortKi]);

  if (loading) return <Spin fullscreen />;

  return (
    <div className="page-wrapper">
      {/* FILTER */}
      <div className="filter-bar">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search name"
          allowClear
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select value={sortKi} onChange={setSortKi}>
          <Option value="default">Sort by Ki</Option>
          <Option value="asc">Ki tăng dần</Option>
          <Option value="desc">Ki giảm dần</Option>
        </Select>
      </div>

      {/* GLASS CARD GRID */}
      <div className="card-grid">
        {processedItems.map((c) => (
          <div
            key={c.id}
            className="container"
            onClick={() => handleOpenDetail(c.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="box">
              <span className="title">{c.name.toUpperCase()}</span>

              <img src={c.image} alt={c.name} className="char-image" />

              <div>
                <strong>{c.race}</strong>
                <p>{c.affiliation}</p>
                <span>KI</span> <span>{c.ki}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {data && (
        <div className="pagination-wrapper">
          <Pagination
            current={data.meta.currentPage}
            total={data.meta.totalItems}
            pageSize={10}
            onChange={setCurrentPage}
            showSizeChanger={false}
          />
        </div>
      )}

      {/* DETAIL MODAL */}
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        width={600}
      >
        {detailLoading ? (
          <Spin />
        ) : (
          detail && (
            <div style={{ textAlign: "center" }}>
              <img
                src={detail.image}
                alt={detail.name}
                style={{ height: 180, objectFit: "contain" }}
              />

              <h2>{detail.name}</h2>
              <p>{detail.description}</p>

              <p>
                <b>Race:</b> {detail.race}
              </p>
              <p>
                <b>Gender:</b> {detail.gender}
              </p>
              <p>
                <b>Affiliation:</b> {detail.affiliation}
              </p>
              <p>
                <b>Ki:</b> {detail.ki}
              </p>
              <p>
                <b>Max Ki:</b> {detail.maxKi}
              </p>
            </div>
          )
        )}
      </Modal>
    </div>
  );
};

export default TestEx1v3;
