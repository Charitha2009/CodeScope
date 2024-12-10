import React from 'react';
import './OurWork.css';
import AvgExecutionTime from '../../Images/AvgExecutionTime.png';
import AvgExecutionTimeGraph from '../../Images/AvgExecutionTimeGraph.png';
import SortingValues from '../../Images/sortingValues.png';
import DijkstraValues from '../../Images/DijkstraValues.png';
import MatrixMutliplicationValues from '../../Images/MatrixMutliplicationValues.png';
import throughputVSdatasize from '../../Images/throughputVSdatasize.jpeg';
import cpuUtilization from '../../Images/cpuUtilization.jpeg';
import mediumNlargeCpus from '../../Images/mediumNlargeCpus.png';


// Sample data based on the insights provided
const algorithmPerformanceData = {
  sorting: {
    performance: 'Benefits significantly from increased CPUs and larger instance types. CPU utilization drops on large instances with small datasets.',
    scalability: 'Strong scalability for sorting, but CPU utilization drops significantly when scaled to large instances with small datasets.',
    dataSizeImpact: 'Predictable and linear performance degradation as data size increases, with steady throughput across configurations.',
    cpuUtilizationTrends: 'Underutilizes CPUs when the number of CPUs exceeds the workload, especially in large instances with small datasets.',
    throughputInsights: 'Achieves the highest throughput for smaller datasets on larger instances. Diminishing returns beyond 2 CPUs.',
    resourceEfficiency: 'Efficient for smaller datasets but resource-wasteful when resources exceed workload demands.',
  },
  dijkstra: {
    performance: 'Shows strong performance for small datasets, with execution times and resource utilization optimized for medium instances.',
    scalability: 'Scalability is efficient up to 2 CPUs; however, additional resources offer limited improvements.',
    dataSizeImpact: 'Execution time grows proportionally with data size, but throughput remains consistent for larger datasets.',
    cpuUtilizationTrends: 'Maintains steady CPU utilization across configurations, with no significant underutilization.',
    throughputInsights: 'High throughput for small datasets, but benefits plateau for larger datasets beyond 2 CPUs.',
    resourceEfficiency: 'Maximizes resource efficiency for small to medium datasets but shows minor inefficiencies for larger datasets.',
  },
  matrixMultiplication: {
    performance: 'Performance is heavily resource-dependent, with larger datasets and additional CPUs drastically improving execution times but at the cost of higher resource consumption.',
    scalability: 'Scales effectively with data size and CPUs, but shows diminishing returns when scaling beyond 3 CPUs.',
    dataSizeImpact: 'Performance degrades significantly with increased data size due to computational complexity, especially on medium instances.',
    cpuUtilizationTrends: 'Utilizes CPUs efficiently for larger datasets but faces diminishing returns with additional CPUs for small datasets.',
    throughputInsights: 'Throughput stabilizes across data sizes and instances, showing resilience in data handling.',
    resourceEfficiency: 'Requires careful tuning of resources to balance execution time and resource consumption effectively.',
  },
};

const OurWork = () => {
  return (
    <div className="our-work-container">
      <h1>Our Work</h1>
      <p>
        We performed benchmarking on algorithms Merge Sort, Sparse Matrix Multiplication, and Dijkstra's Algorithm by utilizing parallelization and scaling the number of CPUs up to 3 on medium and large Jetstream m3 instances. We used the Hadoop Distributed File System (HDFS) and added up to 3 worker nodes to evaluate the performance of these algorithms.
      </p>

      <h2>Insights</h2>
      <div className="algorithm-insights">
        <h3>1. Algorithm Performance on Instance Types</h3>
        <ul>
          <li><strong>Sorting:</strong> {algorithmPerformanceData.sorting.performance}</li>
          <li><strong>Dijkstra's Algorithm:</strong> {algorithmPerformanceData.dijkstra.performance}</li>
          <li><strong>Matrix Multiplication:</strong> {algorithmPerformanceData.matrixMultiplication.performance}</li>
        </ul>

        <h3>2. Data Size Impact</h3>
        <ul>
          <li><strong>Sorting:</strong> {algorithmPerformanceData.sorting.dataSizeImpact}</li>
          <li><strong>Dijkstra's Algorithm:</strong> {algorithmPerformanceData.dijkstra.dataSizeImpact}</li>
          <li><strong>Matrix Multiplication:</strong> {algorithmPerformanceData.matrixMultiplication.dataSizeImpact}</li>
        </ul>

        <h3>3. CPU Utilization Trends</h3>
        <ul>
          <li><strong>Sorting:</strong> {algorithmPerformanceData.sorting.cpuUtilizationTrends}</li>
          <li><strong>Dijkstra's Algorithm:</strong> {algorithmPerformanceData.dijkstra.cpuUtilizationTrends}</li>
          <li><strong>Matrix Multiplication:</strong> {algorithmPerformanceData.matrixMultiplication.cpuUtilizationTrends}</li>
        </ul>

        <h3>4. Throughput and Data Rate Insights</h3>
        <ul>
          <li><strong>Sorting:</strong> {algorithmPerformanceData.sorting.throughputInsights}</li>
          <li><strong>Dijkstra's Algorithm:</strong> {algorithmPerformanceData.dijkstra.throughputInsights}</li>
          <li><strong>Matrix Multiplication:</strong> {algorithmPerformanceData.matrixMultiplication.throughputInsights}</li>
        </ul>

        <h3>5. Resource Efficiency</h3>
        <ul>
          <li><strong>Sorting:</strong> {algorithmPerformanceData.sorting.resourceEfficiency}</li>
          <li><strong>Dijkstra's Algorithm:</strong> {algorithmPerformanceData.dijkstra.resourceEfficiency}</li>
          <li><strong>Matrix Multiplication:</strong> {algorithmPerformanceData.matrixMultiplication.resourceEfficiency}</li>
        </ul>
      </div>
      <h3>Our Observations</h3>
    {/* tables for all three algorithms */}
      <div className="images-container">
        <img src={SortingValues} alt="Average Execution Time" className="image" />
        <img src={MatrixMutliplicationValues} alt="Average Execution Time Graph" className="image" />
        <img src={DijkstraValues} alt="Average Execution Time Graph" className="image" />
      </div>


      <h2>Performance Analysis Across Algorithms​</h2>
      <h3>Execution Time Comparision</h3>
      <ul>
        <li><strong>Sorting:</strong> Execution time scales linearly with data size, showing good scalability (26.67s for 100MB to 95s for 500MB). Performs efficiently across medium and large instances compared to other algorithms.​
​</li>
        <li><strong>Sparse Matrix Multiplication:</strong>Most efficient for smaller datasets, with the lowest execution times (23.43s for 100MB and 60.25s for 200MB).​
Scales moderately, with execution time increasing to 115s for 500MB.​​</li>
        <li><strong>Dijkstra's Algorithm:</strong> Execution time increases steeply with data size, from 403s (100MB) to 3701s (500MB), highlighting high computational demand.​
Benefits from larger instances are limited, indicating potential optimization needs​​</li>
      </ul>
      <div className="images-container">
        <img src={AvgExecutionTime} alt="Average Execution Time" className="image" />
        <img src={AvgExecutionTimeGraph} alt="Average Execution Time Graph" className="image" />
      </div>

      <h3>Throughput</h3>
      <ul>
        <li><strong>Sorting:</strong>Steady improvement with additional CPUs, showcasing better scalability.​​</li>
        <li><strong>Sparse Matrix Multiplication:</strong>Multiplication: Higher initial throughput but plateaus with increasing CPUs.​​​</li>
        <li><strong>Dijkstra's Algorithm:</strong>Moderate gains with additional CPUs.​​​</li>
      </ul>

      <h3>Data Rate</h3>
      <ul>
        <li><strong>Sorting:</strong>Sorting shows consistent improvement with more CPUs.​​​</li>
        <li><strong>Sparse Matrix Multiplication:</strong>Matrix Multiplication starts at a higher rate but scales poorly as CPUs increase.​​​​</li>
        <li><strong>Dijkstra's Algorithm:</strong>Dijkstra demonstrates moderate scalability in data rate.​​​​</li>
      </ul>

      {/* images */}
      <div className="images-container">
        <img src={throughputVSdatasize} alt="Average Execution Time" className="image" />
      </div>

      <h3>CPU Utilization</h3>
      <ul>
        <li><strong>Medium Instances:</strong>Achieve better CPU utilization (68%-96%), making them more efficient for CPU-bound tasks.​​​​</li>
        <li><strong>Large Instances:</strong>Suboptimal performance for smaller datasets due to resource underutilization.​​​​​</li>
        <li><strong>Key Observations:</strong>Adding more CPUs improves execution time but shows diminishing returns beyond a certain point.​ Large instances excel only for larger datasets but may lead to over-provisioning for smaller workloads.​​</li>
      </ul>
      {/* images */}
      <div className="images-container">
        <img src={cpuUtilization} alt="Average Execution Time Graph" className="image" />
        <img src={mediumNlargeCpus} alt="Average Execution Time" className="image" />
      </div>

      <h2>Hypothesis Disproven</h2>
      <ul>
        <li><strong>"Adding More CPUs Always Improves Performance":</strong> Diminishing returns beyond 2 CPUs for most configurations (e.g., only marginal improvement from the 3rd CPU).​</li>
        <li><strong>"Large Instances are Better for All Workloads":</strong> Medium instances outperform large ones for smaller datasets in terms of cost-efficiency and resource utilization.​</li>
        <li><strong>"Throughput Always Increases with Dataset Size":</strong> Throughput decreases as dataset size increases due to bottlenecks in resource allocation.​​</li>
      </ul>

      <h2>Learning Outcomes</h2>
      <ul>
        <li>For a 500MB dataset on medium instances: Adding the 3rd CPU reduced execution time by only ~29%, while throughput improved by ~38%.​​</li>
        <li>For a 100MB dataset on large instances: CPU utilization dropped from 75% (1 CPU) to 39% (3 CPUs), indicating underutilization.​​</li>
      </ul>

      <h2>Recommendations Based on Insights</h2>
      <ul>
        <li><strong>Optimal Choice for CPU-Bound or Small Dataset Workloads:</strong> Medium instances demonstrate superior CPU utilization for CPU-bound tasks or smaller datasets. Their balanced resource allocation ensures efficient performance without significant overhead. For tasks that do not require extensive computational resources, medium instances are more cost-effective than large instances.
</li>
        <li><strong>Efficient CPU Allocation:</strong>Adding more CPUs improves execution time; however, diminishing returns are evident beyond 2 CPUs. Limiting the number of CPUs per instance ensures optimal resource utilization and prevents over-allocation, leading to cost savings and better efficiency.</li>
        <li><strong>Scaling for Larger Datasets:</strong> For larger datasets, algorithms like Sorting exhibit better scalability with increased resources. Choosing appropriate configurations, such as large instances with more CPUs, ensures faster execution times and higher throughput while maintaining efficient CPU utilization.</li>
      </ul>

      <h2>Algorithm-Specific Recommendations</h2>
      <ul>
        <li><strong>Sorting:</strong> Best suited for scenarios requiring high scalability and consistent performance improvements.​</li>
        <li><strong>Sparse Matrix Multiplication:</strong>Avoid using large instances unless handling extremely large datasets.​</li>
        <li><strong>Dijkstra's Algorithm:</strong> Optimize task distribution to minimize bottlenecks like memory overheads.​</li>
      </ul>

    <h2>Conclusion </h2>
      <h3>Key Takeaways</h3>
      <ul>
        <li>Optimal configurations depend on workload size and algorithm characteristics: Use medium instances for CPU-bound tasks and smaller datasets.​</li>
        <li>Reserve large instances for workloads involving very large datasets or high parallelism requirements.​​</li>
        <li>Sorting is the most scalable algorithm, while Matrix Multiplication requires optimization to improve scalability.​​</li>
      </ul>

      <h3>Scope</h3>
      <ul>
        <li>Investigate optimization techniques for algorithms like Matrix Multiplication to enhance scalability.​</li>
        <li>Explore additional metrics like energy efficiency to complement performance analysis.​​</li>
        <li>Extend the benchmarking study to other instance types or cloud environments for broader applicability.​​​</li>
      </ul>

      </div>
  );
};

export default OurWork;
