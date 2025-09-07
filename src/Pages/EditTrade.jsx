import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams, useNavigate } from "react-router-dom";
import { apiGet } from "../lib/api";

const EditTrade = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editingTrade, setEditingTrade] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    const fetchTrade = async () => {
      try {
        const trade = await apiGet(`Trades/${id}`);
        if (alive) setEditingTrade(trade);
      } catch (e) {
        try {
          const all = await apiGet("Trades");
          const found = all.find((t) => t.id === id) || null;
          if (alive) setEditingTrade(found);
        } catch (err) {
          if (alive) setError("Failed to load trade.");
        }
      }
    };

    fetchTrade();
    return () => {
      alive = false;
    };
  }, [id]);

  if (error) {
    return (
      <MainLayout>
        <div className="text-primary-headings m-5">
          <p className="mb-3">{error}</p>
          <button
            onClick={() => navigate("/trade-journal")}
            className="border border-brand-green/50 px-4 py-2 rounded-xl bg-brand-green/30"
          >
            Back to Trade Journal
          </button>
        </div>
      </MainLayout>
    );
  }

  if (!editingTrade) {
    return (
      <MainLayout>
        <div className="text-primary-headings m-5">Loading trade…</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="text-primary-headings m-5 min-h-full">
        <p className="text-3xl mb-5">Editing Trade</p>
        <p>Asset Pair: {editingTrade.assetPair}</p>
        <p>Entry price: {editingTrade.entryPrice}</p>
        <p>Take Profit: {editingTrade.takeProfit}</p>
        <p>Stop Loss: {editingTrade.stopLoss}</p>
        <p>Direction: {editingTrade.direction}</p>
        <p>Lot Size: {editingTrade.lotSize}</p>
        <p>Session: {editingTrade.session}</p>

        <button
          onClick={() => navigate("/trade-journal")}
          className="mt-4 border border-brand-green/50 px-4 py-2 rounded-xl bg-brand-green/30"
        >
          Back to Trade Journal
        </button>
      </div>
    </MainLayout>
  );
};

export default EditTrade;
