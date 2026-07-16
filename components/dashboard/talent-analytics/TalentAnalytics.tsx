import OverviewCards from "./OverviewCards";
import RegistrationChart from "./RegistrationChart";
import RegistrationStatistics from "./RegistrationStatistics";
import Demographics from "./Demographics";

export default function TalentAnalytics() {
  return (
    <section className="mt-8">
      <OverviewCards />

      <RegistrationChart />

      <RegistrationStatistics />

      <Demographics />
    </section>
  );
}
