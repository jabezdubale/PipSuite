import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import useAuth from "../stores/auth";
import useRiskCalculatorStore from "../stores/RiskCalculatorStore";
import { apiGet } from "../lib/api";

const NewTrade = () => {
  useEffect(() => {
    const getAllAssets = async () => {
      try {
        const allAsset = await apiGet("Assets");
        setAllAssets(allAsset);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    getAllAssets();
  }, []);
  const user = useAuth((state) => state.user);
  const allAssets = useRiskCalculatorStore((state) => state.allAssets);
  const setAllAssets = useRiskCalculatorStore((state) => state.setAllAssets);

  return (
    <MainLayout>
      <div className="text-primary-headings">
        {allAssets.map((as) => (
          <p>{as.symbol}</p>
        ))}
      </div>
    </MainLayout>
  );
};

export default NewTrade;
