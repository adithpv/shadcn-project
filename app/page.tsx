import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="mt-2.5 space-y-6 p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          {/* Add any header actions/buttons here */}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column - Main Charts */}
        <div className="space-y-6 lg:col-span-8">
          {/* Top Row - Bar Chart */}
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Revenue Overview</h2>
            <AppBarChart />
          </div>

          {/* Bottom Row - Area Chart */}
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Performance Metrics</h2>
            <AppAreaChart />
          </div>
        </div>

        {/* Right Column - Side Content */}
        <div className="space-y-6 lg:col-span-4">
          {/* Todo List */}
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Tasks</h2>
            <TodoList />
          </div>

          {/* Pie Chart */}
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Distribution</h2>
            <AppPieChart />
          </div>
        </div>
      </div>

      {/* Bottom Section - Lists */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Latest Transactions */}
        <div className="bg-card rounded-xl p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium">Latest Transactions</h2>
          <CardList title="Latest Transactions" />
        </div>

        {/* Popular Content */}
        <div className="bg-card rounded-xl p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium">Popular Content</h2>
          <CardList title="Popular Content" />
        </div>
      </div>
    </div>
  );
}
