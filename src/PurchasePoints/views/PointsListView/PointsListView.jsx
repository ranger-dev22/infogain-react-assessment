import { styled } from "@mui/material/styles";
import Progress from "../../../Common/components/ProgressBar/Progress";
import useCollectPoints, {
  STATUSES,
} from "../../hooks/useColletPoints/useCollectPoints";
import TotalPoints from "../../components/TotalPoints/TotalPoints";
import PointsTable from "../../components/PointsTable/PointsTable";
import { calculateRewardForGivenCollection } from "../../logic/calculateRewardForGivenCollection/calculateRewardForGivenCollection";
import BaseLayout from "../../../Common/layouts/BaseLayout/BaseLayout";

const PointsListSection = styled("div")(({ theme }) => ({
  maxWidth: "1080px",
  width: "100%",
  borderRadius: "10px",
  backgroundColor: "#f9f6ff",
  padding: theme.spacing(2),
}));

const renderElements = (data) => {
  if (!data) return <Progress />;
  switch (data.status) {
    case STATUSES.isLoading:
      return <Progress />;
    case STATUSES.error:
      return <h1>Something went wrong</h1>;
    case STATUSES.completed:
      return (
        <>
          <TotalPoints
            totalPoints={calculateRewardForGivenCollection(data.data)}
          />
          <PointsTable points={data.data[0] || {}} />
        </>
      );
    default:
      return <h1>Please refresh page</h1>;
  }
};
const PointsListView = () => {
  const { data } = useCollectPoints();
  return (
    <BaseLayout>
      <PointsListSection>{renderElements(data)}</PointsListSection>
    </BaseLayout>
  );
};

export default PointsListView;
