import OverviewCards from "./OverviewCards";
import RegistrationChart from "./RegistrationChart";
import RegistrationStatistics from "./RegistrationStatistics";

export default function TalentAnalytics() {
  return (
    <section className="mt-8">
      <OverviewCards />

      <RegistrationChart />

      <RegistrationStatistics />

      {/* GenderDistributionChart */}

      {/* NationalityDistributionChart */}

      {/* CountryDistributionChart */}

      {/* CityDistributionChart */}

      {/* AgeDistributionChart */}
    </section>
  );
}
