export const getAnalysisData = (formData) => {
    const { algorithm, dataSizeOption, instance, cpusPerWorker } = formData;
  
    // Map configurations for sorting
    const sortingMap = {
        // --- 100MB Dataset ---
        "100MB-medium-1": {
          executionTime: "Time: 35 seconds",
          cpuUtilization: "CPU Utilization: 90%",
          throughput: "Throughput: 2.9 MBPS",
          dataRate: "dataRate: 2.8 MBPS",
          recommendations: `Resource Scaling:

          Add more CPUs or worker nodes to improve throughput and reduce execution time.
          Upgrade to a larger instance type if cost-efficiency permits.
          Fine-Tuning Application Configurations:
          
          Optimize buffer sizes and task splits to balance workload distribution.
          Use profiling tools to identify bottlenecks and optimize system performance.
          Algorithm Optimization:
          
          If this is a compute-intensive task, evaluate the algorithm for potential optimizations to reduce complexity.
          Cost-Performance Tradeoff:
          
          This configuration is suitable for cost efficiency. However, for time-sensitive tasks, consider scaling resources to improve performance.`,
          chartData: {
            executionTime: [35, 65],
            cpuUtilization: [90, 10],
            throughput: [2.9, 97.1],
            dataRate: [2.8, 98.2],
          },
        },
        "100MB-medium-2": {
            executionTime: "Time: 25 seconds",
            cpuUtilization: "CPU Utilization: 80%",
            throughput: "Throughput: 4.09 MBPS",
            dataRate: "dataRate: 4.8 MBPS",
            recommendations: `Resource Scaling:

            Consider adding more CPUs or worker nodes for larger datasets or time-sensitive tasks.
            Fine-Tuning Application Configurations:
            
            Adjust buffer sizes, data chunk sizes, and scheduling configurations to better utilize available resources.
            Cost-Performance Tradeoff:
            
            This configuration is already cost-efficient. Scaling resources is only necessary for larger datasets or faster performance requirements.
            Future Scaling:
            
            For datasets larger than the current workload, plan to scale both compute resources (CPUs, memory) and storage capacity.`,
            chartData: {
              executionTime: [25, 75],
              cpuUtilization: [80, 20],
              throughput: [4.09, 95.91],
              dataRate: [4.8, 95.2],
            },
          },
          "100MB-medium-3": {
            executionTime: "Time: 20 seconds",
            cpuUtilization: "CPU Utilization: 75%",
            throughput: "5 MBPS",
            dataRate: "dataRate: 5 MBPS",
            recommendations: `Scaling for Larger Workloads:

            If processing larger datasets, increase the number of CPUs or use a higher-tier instance to maintain efficiency.
            Cost-Efficiency:
            
            This configuration balances performance and cost effectively. Scaling up resources is only necessary for time-sensitive or larger workloads.
            Fine-Tuning:
            
            Optimize split sizes and task scheduling to further reduce idle time and boost throughput.
            Algorithm Improvements:
            
            Ensure the algorithm is optimized for the current configuration to avoid unnecessary computational overhead.`,
            chartData: {
              executionTime: [20, 80],
              cpuUtilization: [75, 25],
              throughput: [5, 95],
              dataRate: [5, 95],
            },
          },
    
        // --- 200MB Dataset ---
        "200MB-medium-1": {
          executionTime: "Time: 70 seconds",
          cpuUtilization: "90%",
          throughput: "Throughput: 2.5 MBPS",
          dataRate: "dataRate: 2.5 MBPS",
          recommendations: `Scaling Resources:

          Add CPUs or Worker Nodes: Scaling resources can significantly reduce execution time and improve throughput.
          Upgrade Instance Type: For larger datasets or faster processing, move to an instance with more compute power and memory.
          Cost-Performance Optimization:
          
          This configuration may be cost-efficient for small-scale workloads, but for larger datasets or time-sensitive tasks, resource scaling is essential.
          Performance Monitoring and Tuning:
          
          Use monitoring tools to identify bottlenecks in CPU, memory, or I/O performance and adjust configurations accordingly.
          Algorithm Efficiency:
          
          Ensure the algorithm is optimized for the workload and configuration to minimize unnecessary computations.`,
          chartData: {
            executionTime: [70, 30],
            cpuUtilization: [90, 10],
            throughput: [2.5, 97.5],
            dataRate: [2.5, 97.5],
          },
        },
        "200MB-medium-2": {
            executionTime: "Time: 45 seconds",
            cpuUtilization: "CPU Utilization: 80%",
            throughput: "Throughput: 4.5 MBPS",
            dataRate: "dataRate: 4.5 MBPS",
            recommendations: `Scale Resources for Larger Workloads:

            Add more worker nodes or CPUs to handle larger datasets more efficiently.
            Optimize Configurations:
            
            Adjust buffer sizes, split sizes, and scheduling settings to better utilize available resources.
            Cost-Performance Optimization:
            
            This configuration is a good balance of cost and performance for medium workloads. For larger datasets or faster execution, scaling up resources may be necessary.
            Monitoring and Tuning:
            
            Continuously monitor CPU, memory, and I/O performance to identify bottlenecks and tune the system accordingly.`,
            chartData: {
              executionTime: [45, 55],
              cpuUtilization: [80, 20],
              throughput: [4.5, 95.5],
              dataRate: [4.5, 95.5],
            },
          },
          "200MB-medium-3": {
            executionTime: "Time: 35 seconds",
            cpuUtilization: "CPU Utilization: 70%",
            throughput: "Throughput: 5.7 MBPS",
            dataRate: "dataRate: 5.7 MBPS",
            recommendations: `Scaling Resources:

            Add more CPUs or worker nodes to handle larger datasets or time-sensitive workloads.
            Upgrade to a larger instance for better memory and processing capabilities.
            Task and Split Optimization:
            
            Fine-tune task sizes and data splits to distribute workloads evenly and minimize idle time.
            Algorithm Optimization:
            
            Refactor the algorithm for reduced complexity and better performance with current configurations.
            Monitor Performance:
            
            Regularly analyze resource utilization (CPU, memory, and I/O) to identify bottlenecks and adjust configurations.
            Cost-Performance Tradeoff:
            
            This configuration is cost-efficient for medium workloads. Scale resources only if processing speed or dataset size increases significantly.`,
            chartData: {
              executionTime: [35, 65],
              cpuUtilization: [70, 30],
              throughput: [5.7, 94.3],
              dataRate: [5.7, 94.],
            },
          },
          
        // --- 1GB Dataset ---
        "500MB-medium-1": {
          executionTime: "Time: 140 seconds",
          cpuUtilization: "CPU Utilization: 90%",
          throughput: "Throughput: 3.5 MBPS",
          dataRate: "dataRate: 3.5 MBPS",
          recommendations: `Resource Scaling:

          Add worker nodes or CPUs to handle the workload more efficiently and reduce execution time.
          Upgrade to a larger instance with better CPU and memory performance.
          Task and Split Optimization:
          
          Fine-tune task sizes and data splits to balance workloads and minimize processing delays.
          Algorithm and Workflow Optimization:
          
          Refactor the algorithm to improve processing efficiency and reduce execution complexity.
          Monitoring and Performance Tuning:
          
          Regularly monitor resource usage and performance metrics to identify bottlenecks and adjust configurations accordingly.
          Cost-Performance Tradeoff:
          
          This configuration is suitable for smaller workloads but requires scaling for larger datasets or faster processing needs.`,
          chartData: {
            executionTime: [140, 10],
            cpuUtilization: [90, 10],
            throughput: [3.5, 96.5],
            dataRate: [3.5, 96.5],
          },
        },
        "500MB-medium-2": {
            executionTime: "Time: 85 seconds",
            cpuUtilization: "CPU Utilization: 80%",
            throughput: "Throughput: 6 MBPS",
            dataRate: "dataRate: 6 MBPS",
            recommendations: `Resource Scaling:

            Add CPUs or Worker Nodes: Scaling resources can reduce execution time and increase throughput for larger datasets or faster performance needs.
            Optimize Configurations:
            
            Fine-tune split sizes, task scheduling, and buffer sizes to maximize resource utilization and efficiency.
            Algorithm Improvements:
            
            Evaluate the current algorithm for computational overhead and optimize for better performance.
            Cost-Efficiency:
            
            The current setup balances performance and resource usage effectively for medium workloads. For larger datasets or faster results, consider scaling resources.
            Future Workloads:
            
            Plan for scalability by optimizing the current configuration to accommodate larger datasets or higher processing demands.`,
            chartData: {
              executionTime: [85, 15],
              cpuUtilization: [80, 10],
              throughput: [6, 94],
              dataRate: [6, 94],
            },
          },
          "500MB-medium-3": {
            executionTime: "Time: 60 seconds",
            cpuUtilization: "CPU Utilization: 70%",
            throughput: "Throughput: 8.3 MBPS",
            dataRate: "dataRate: 8.3 MBPS",
            recommendations: `Resource Scaling:

            Add CPUs or Worker Nodes: Scaling resources can improve execution time, throughput, and overall processing efficiency.
            Optimize Configurations:
            
            Adjust task sizes, split sizes, and resource allocation to balance workloads and fully utilize resources.
            Algorithm Improvements:
            
            Refactor the algorithm to ensure it is optimized for the dataset size and resource configuration.
            Cost vs. Performance:
            
            This configuration is cost-efficient for medium workloads. For larger datasets or faster results, consider upgrading instances or adding resources.
            Monitoring and Tuning:
            
            Continuously monitor resource usage and adjust configurations to address bottlenecks and maximize performance.`,
            chartData: {
              executionTime: [60, 40],
              cpuUtilization: [70, 30],
              throughput: [8.3, 91.7],
              dataRate: [8.3, 91.7],
            },
          },

        //large instances
        "100MB-large-1": {
            executionTime: "Time: 25 seconds",
            cpuUtilization: "Normalized CPU Utilization: 75%",
            throughput: "Throughput: 4.06 MBPS",
            dataRate: "dataRate: 5.63 MBPS",
            recommendations: `Use a large instance for datasets larger than 200MB for maximum efficiency.
            For small datasets like 100MB, stick to medium instances or increase worker nodes for cost-efficiency.
            Regularly monitor execution time, CPU utilization, and throughput to identify under-utilization or over-provisioning of resources.
            `,
            chartData: {
                executionTime: [25, 75], // [Computation Time, Idle Time]
                cpuUtilization: [75, 25], // [Normalized Utilization, Remaining Capacity]
                throughput: [40, 60], // [Processed Data, Unused Capacity]
                dataRate: [50, 50], // [Utilized Bandwidth, Available Bandwidth]
              },
          },
          "100MB-large-2": {
            executionTime: "Time: 22 seconds",
            cpuUtilization: "Normalized CPU Utilization: 61.5%",
            throughput: "Throughput: 5.6 MBPS",
            dataRate: "Data Rate: 7.56 MBPS",
            recommendations: `Use Cases:
            This configuration is optimal for small to medium datasets (100MB–500MB).
            The improved execution time and throughput justify the use of 2 CPUs for tasks requiring moderate parallelism.

            Scaling Advice:
            For larger datasets (500MB+), consider increasing CPUs to 3 or adding worker nodes to maintain or improve performance.

            Efficiency:
            Ensure task parallelization is configured effectively to utilize both CPUs fully.
            Monitor CPU utilization; if it frequently drops below 61.5%, task distribution may need optimization.
            `,
            chartData: {
            executionTime: [22, 78], // [Computation Time, Idle Time]
            cpuUtilization: [61.5, 38.5], // [Normalized Utilization, Remaining Capacity]
            throughput: [56, 44], // [Processed Data, Unused Capacity]
            dataRate: [50, 50], // [Utilized Bandwidth, Available Bandwidth]
            }
,
            },
            "100MB-large-3": {
                executionTime: "Time: 18 seconds",
                cpuUtilization: "Normalized CPU Utilization: 39%",
                throughput: "Throughput: 6.67 MBPS",
                dataRate: "Data Rate: 8.5 MBPS",
                recommendations: `
              Optimal Use Case:
              This configuration is highly suitable for small to medium datasets (100MB–1GB).
              For small datasets like 100MB, 3 CPUs may slightly over-provision resources but provide excellent performance.
              
              Scaling Advice:
              For datasets larger than 500MB, this setup ensures consistent performance without significant degradation in execution time or throughput.
              
              Efficiency Check:
              Ensure tasks are well-parallelized and avoid underutilization of resources.
              If utilization drops below 39%, consider revisiting task distribution strategies.
              
              Cost Consideration:
              For datasets 100MB–200MB, evaluate whether 2 CPUs could provide comparable performance at a lower cost.`,
                chartData: {
                  executionTime: [18, 82], // [Computation Time, Idle Time]
                  cpuUtilization: [39, 61], // [Normalized Utilization, Remaining Capacity]
                  throughput: [67, 33], // [Processed Data, Unused Capacity]
                  dataRate: [40, 60], // [Utilized Bandwidth, Available Bandwidth]
                }
              },
      
          // --- 500MB Dataset ---
          "200MB-large-1": {
            executionTime: "Time: 53.09 seconds",
            cpuUtilization: "Normalized CPU Utilization: 90%",
            throughput: "Throughput: 4.5 MBPS",
            dataRate: "Data Rate: 5.4 MBPS",
            recommendations: `
          Increase CPUs:
          For faster execution, consider using 2 or more CPUs, which could significantly reduce execution time.
          
          Monitor Throughput:
          Throughput is relatively low with 1 CPU, indicating a bottleneck. For larger datasets, this could become a limiting factor.
          
          Scaling Needs:
          For datasets larger than 200MB, using a single CPU will result in disproportionately longer execution times and lower throughput.
          
          Cost vs. Performance:
          If cost-efficiency is critical and time is not a constraint, a single CPU may suffice for datasets like 200MB, but for higher performance, scaling to 2 CPUs is recommended.`,
            chartData: {
              executionTime: [53, 47], // [Computation Time, Idle Time]
              cpuUtilization: [65, 10], // [Normalized Utilization, Remaining Capacity]
              throughput: [45, 55], // [Processed Data, Unused Capacity]
              dataRate: [30, 70], // [Utilized Bandwidth, Available Bandwidth]
            }
          },
          "200MB-large-2": {
            executionTime: "Time: 44.78 seconds",
            cpuUtilization: "Normalized CPU Utilization: 89%",
            throughput: "Throughput: 6.36 MBPS",
            dataRate: "Data Rate: 8.3 MBPS",
            recommendations: `
          Optimal Configuration:
          This setup provides a good balance between performance and cost-efficiency for moderate datasets like 200MB.
          
          Further Scaling:
          For datasets larger than 200MB, consider increasing to 3 CPUs or adding additional worker nodes to maintain low execution times.
          
          Improved Throughput:
          The throughput of 6.36 MBPS is a significant improvement over a single CPU configuration, making this setup suitable for time-sensitive tasks.
          
          Utilization Monitoring:
          Monitor CPU utilization to ensure both CPUs are effectively utilized. If underutilization occurs, reconfigure task partitioning for better distribution.`,
            chartData: {
              executionTime: [45, 55], // Computation vs Idle
              cpuUtilization: [65, 10], // Utilized vs Remaining Capacity
              throughput: [63, 37], // Utilized vs Unused Bandwidth
              dataRate: [42, 58], // Utilized vs Available Capacity
            }
          }
          ,
          "200MB-large-3": {
            executionTime: "Time: 18 seconds",
            cpuUtilization: "Normalized CPU Utilization: 50%",
            throughput: "Throughput: 10.82 MBPS",
            dataRate: "Data Rate: 10.82 MBPS",
            recommendations: `
          High Efficiency:
          This configuration is highly efficient for processing 200MB data, delivering low execution time and high throughput.
          
          Scaling for Larger Datasets:
          For datasets larger than 500MB, additional worker nodes or higher parallelism levels may be required to maintain similar performance metrics.
          
          Cost-Effectiveness:
          While throughput is excellent, this setup may be over-provisioned for smaller datasets (e.g., <200MB). For smaller workloads, consider reducing to 2 CPUs to optimize costs without sacrificing performance.
          
          Utilization and Task Management:
          Ensure task partitioning is balanced across all CPUs to maximize resource usage. Monitor CPU metrics periodically to detect and resolve any bottlenecks.`,
            chartData: {
              executionTime: [18, 82], // Computation vs Idle time
              cpuUtilization: [50, 50], // Utilized vs Remaining capacity
              throughput: [90, 10], // Utilized vs Unused bandwidth
              dataRate: [70, 30], // Utilized vs Available bandwidth
            }
          },
      
          // --- 500MB Dataset ---
          "500MB-large-1": {
            executionTime: "Time: 125 seconds",
            cpuUtilization: "Normalized CPU Utilization: 93%",
            throughput: "Throughput: 4.8 MBPS",
            dataRate: "Data Rate: 5 MBPS",
            recommendations: `
          Inefficiency Warning:
          A single CPU is not optimal for large datasets like 500MB. The execution time is significantly longer, and throughput is suboptimal.
          
          Increase CPUs:
          Upgrade to 2 or 3 CPUs to improve execution time and throughput.
          
          Scaling Options:
          For datasets larger than 500MB, consider adding additional worker nodes to distribute the workload effectively.
          
          Balanced Cost-Performance:
          While 1 CPU may be cost-efficient for small workloads, the trade-off in execution time and throughput for larger datasets makes this configuration less desirable.`,
            chartData: {
              executionTime: [125, 75], // Computation vs Idle time
              cpuUtilization: [93, 7], // 93% CPU utilization
              throughput: [30, 70], // Low throughput, room for improvement
              dataRate: [80, 20], // High data rate potential, but limited throughput
            }
          },
          "500MB-large-2": {
            executionTime: "Time: 86 seconds",
            cpuUtilization: "Normalized CPU Utilization: 90% (46.5% per CPU)",
            throughput: "Throughput: 6.25 MBPS",
            dataRate: "Data Rate: 6.52 MBPS",
            recommendations: `
          Improved Efficiency:
          This configuration offers a significant improvement in execution time and throughput compared to using 1 CPU, making it more suitable for moderate datasets like 500MB.
          
          Scaling Options:
          For datasets larger than 500MB, consider upgrading to 3 CPUs or adding additional worker nodes to maintain low execution times.
          
          Balanced Performance:
          This setup balances cost and performance well for 500MB data, offering reasonable execution time and resource utilization.
          
          Further Optimizations:
          Optimize task partitioning to ensure both CPUs are fully utilized, avoiding underutilization.`,
            chartData: {
              executionTime: [86, 50], // Computation vs Idle time
              cpuUtilization: [93, 7], // 93% utilization across 2 CPUs (each ~46.5%)
              throughput: [40, 60], // Improving throughput compared to 1 CPU
              dataRate: [75, 25], // High data rate potential
            }
          },
          "500MB-large-3": {
            executionTime: "Time: 64 seconds",
            cpuUtilization: "Normalized CPU Utilization: 85% (28.33% per CPU)",
            throughput: "Throughput: 8.33 MBPS",
            dataRate: "Data Rate: 9.1 MBPS",
            recommendations: `
          Highly Efficient Configuration:
          This setup provides excellent performance for 500MB datasets, with a significant reduction in execution time and a high throughput.
          
          Scaling Options:
          For datasets larger than 1GB, consider increasing worker nodes or using instances with more CPUs to maintain performance.
          
          Optimal for Time-Sensitive Tasks:
          This configuration is suitable for applications that prioritize minimizing execution time for moderately large datasets.
          
          Cost vs. Performance:
          While this setup offers excellent performance, evaluate whether the additional CPU cost is justified for your workload.`,
            chartData: {
              executionTime: [64, 35], // Time comparison: 64s vs ideal time
              cpuUtilization: [85, 15], // 85% utilization across 3 CPUs (~28.33% per CPU)
              throughput: [60, 40], // Improving throughput with 3 CPUs
              dataRate: [80, 20], // High data rate potential
            }
          },
      };
  
    // Map configurations for matrix multiplication
    const matrixMultiplicationMap = {
      "100MB-medium-1": {
        executionTime: "Time: 642 seconds",
        cpuUtilization: "CPU Utilization: 75%",
        throughput: "Throughput: 9.09 MBPS",
        dataRate: "DataRate: 10.09 MBPS",
        recommendations: `
      Optimize for Large Datasets:
      The current configuration is not optimized for large datasets, as execution time is very high. Consider increasing **CPU count** or adding **worker nodes** for parallel processing.
      
      Add Worker Nodes:
      Distribute the workload across multiple worker nodes. This will help reduce execution time significantly and better utilize available resources.
      
      Upgrade to Larger Instance:
      Move to a **larger instance type** with more memory and higher clock-speed CPUs to handle large datasets more efficiently.
      
      Refine Task Distribution:
      Optimize the split size and task allocation to balance the load across resources and minimize idle time.
      
      Enhance I/O Efficiency:
      Improve data transfer mechanisms to ensure that throughput and data rate are maximized. Utilize faster storage solutions or caching to reduce I/O bottlenecks.
      `,
        chartData: {
          executionTime: [642, 450], // Base, with Worker Nodes, with Larger Instance
          cpuUtilization: [75, 65], // Utilization decreases as resources are scaled
          throughput: [9.09, 11.5], // Throughput improves with added resources
          dataRate: [10.09, 12.0] // Data rate increases as processing improves
        }
      }
      ,
      "100MB-medium-2": {
        executionTime: "Time: 357 seconds",
        cpuUtilization: "CPU Utilization: 80%",
        throughput: "Throughput: 9.89 MBPS",
        dataRate: "DataRate: 9.89 MBPS",
        recommendations: `
      Optimize Resource Allocation:
      While the configuration shows decent throughput and data rate, reducing execution time should be a priority. Adding more CPUs or worker nodes could help achieve this.
      
      Upgrade Instance Type:
      Consider upgrading to a larger instance type with additional memory and higher clock-speed CPUs for faster processing.
      
      Parallelize Workload:
      Implement a distributed system or use more worker nodes to split the dataset, reducing bottlenecks and improving parallelism.
      
      Enhance I/O Performance:
      Optimize data transfer mechanisms to reduce delays. Leverage faster storage solutions or caching systems for improved efficiency.
      
      Monitor Utilization:
      Ensure CPU utilization remains below 85% to avoid performance degradation. Use profiling tools to identify and optimize hotspots in the process.
      `,
        chartData: {
          executionTime: [357, 280], // Base, with Worker Nodes, with Larger Instance
          cpuUtilization: [80, 70], // CPU utilization decreases with optimized distribution
          throughput: [9.89, 12.5], // Throughput improves with better scaling
          dataRate: [9.89, 12.2] // Data rate increases with efficient processing
        }
      }
      ,
      "100MB-medium-3": {
        executionTime: "Time: 210 seconds",
        cpuUtilization: "CPU Utilization: 75%",
        throughput: "Throughput: 8.9 MBPS",
        dataRate: "DataRate: 9.04 MBPS",
        recommendations: `
      Improve Parallel Processing:
      Adding worker nodes or CPUs can reduce execution time further and improve throughput for larger datasets.
      
      Optimize Resource Utilization:
      This setup is efficient, but consider monitoring for potential bottlenecks in I/O or memory usage as workload scales.
      
      Upgrade Storage or Network:
      Enhance storage and network I/O performance for sustained data throughput and reduced delays.
      
      Cost-Performance Balance:
      For this workload, this setup is cost-efficient. However, if execution time is critical, consider scaling up resources.
      
      Algorithm Tuning:
      Optimize algorithms for better handling of data splits and task scheduling to maximize CPU and memory efficiency.
      `,
        chartData: {
          executionTime: [210, 180], // Base, with Worker Nodes, with Larger Instance
          cpuUtilization: [75, 70],  // Utilization reduces with better resource allocation
          throughput: [8.9, 10.5], // Improved throughput with scaling
          dataRate: [9.04, 10.8]   // Enhanced data rate with better processing
        }
      }
      ,
      
      "200MB-medium-1": {
        executionTime: "Time: 873 seconds",
        cpuUtilization: "CPU Utilization: 82%",
        throughput: "Throughput: 9.08 MBPS",
        dataRate: "DataRate: 9.24 MBPS",
        recommendations: `
      Performance Optimization:
      To reduce the high execution time, consider increasing the number of CPUs or adding worker nodes for distributed processing.
      
      Parallel Task Execution:
      Split the dataset and process it in parallel to leverage multi-core performance and improve throughput.
      
      Enhance Memory and I/O:
      Upgrading to an instance with more memory and higher I/O capacity can address bottlenecks in data transfer.
      
      Scalability:
      For workloads with similar execution times, distributing the workload across multiple nodes can significantly lower the processing time.
      
      Cost-Effectiveness:
      While the current setup is stable, for time-sensitive workloads, investing in resource upgrades may be necessary.
      `,
        chartData: {
          executionTime: [873, 650], // Base, with Worker Nodes, with Larger Instance
          cpuUtilization: [82, 75],  // Utilization reduces with optimized distribution
          throughput: [9.08, 10.79], // Improved throughput with scaling
          dataRate: [9.24, 11.15]    // Enhanced data rate with better resources
        }
      }
      ,
      "200MB-medium-2": {
        executionTime: "Time: 523 seconds",
        cpuUtilization: "CPU Utilization: 72.86%",
        throughput: "Throughput: 8.03 MBPS",
        dataRate: "DataRate: 8.24 MBPS",
        recommendations: `
      Optimize Resource Utilization:
      To reduce execution time, consider increasing the number of CPUs or worker nodes to improve parallelism and throughput.
      
      Enhance Throughput:
      Upgrading the instance type to one with better I/O performance or larger memory can significantly enhance throughput.
      
      Parallel Processing:
      Split the dataset into smaller chunks and process them concurrently to better utilize CPU resources.
      
      Monitor Bottlenecks:
      Use monitoring tools to analyze whether CPU, memory, or I/O is the limiting factor, and adjust resources accordingly.
      
      Scalability for Larger Workloads:
      For larger datasets, scaling horizontally with more worker nodes may provide better efficiency than vertical scaling.
      `,
        chartData: {
          executionTime: [523, 400], // Base, optimized resources, distributed processing
          cpuUtilization: [72.86, 68], // Reduced with better resource management
          throughput: [8.03, 9.2],   // Improved with optimizations
          dataRate: [8.24, 9.4]      // Enhanced I/O handling with scaling
        }
      }
      ,
      "200MB-medium-3": {
        executionTime: "Time: 402 seconds",
        cpuUtilization: "CPU Utilization: 68%",
        throughput: "Throughput: 9.3 MBPS",
        dataRate: "DataRate: 9.3 MBPS",
        recommendations: `
      Resource Optimization:
      The execution time and throughput indicate good performance for medium workloads. Adding CPUs or using a distributed setup can further improve efficiency.
      
      I/O and Network Optimization:
      To maximize throughput, ensure that I/O and network configurations are optimized, such as increasing buffer sizes or using faster storage solutions.
      
      Scaling for Larger Datasets:
      For datasets larger than the current size, consider scaling horizontally by adding worker nodes, which will distribute the workload effectively.
      
      Performance vs. Cost:
      This setup strikes a reasonable balance between performance and resource usage. Evaluate if further reductions in execution time justify additional costs.
      
      Monitoring and Tuning:
      Monitor CPU utilization trends during peak processing times to ensure efficient usage and identify potential bottlenecks in memory or I/O.
      `,
        chartData: {
          executionTime: [402, 350], // Base, optimized I/O, distributed processing
          cpuUtilization: [68, 65],  // Decreasing with better workload distribution
          throughput: [9.3, 10.5], // Improvement with optimizations
          dataRate: [9.3, 10.6]    // Enhanced by scaling and tuning
        }
      }
      ,
      
      "500MB-medium-1": {
        executionTime: "Time: 4210 seconds",
        cpuUtilization: "CPU Utilization: 96%",
        throughput: "Throughput: 10.20 MBPS",
        dataRate: "DataRate: 10.35 MBPS",
        recommendations: `
      Performance Challenges:
      Execution time is significantly high, indicating the need for scaling and optimization to handle larger datasets efficiently.
      
      Scaling Resources:
      Add more CPUs or worker nodes to distribute the workload and reduce execution time. Using a distributed framework can drastically improve throughput for such large tasks.
      
      CPU Utilization Optimization:
      At 96% CPU utilization, there is minimal headroom for additional tasks. Balancing the workload by splitting it across additional nodes or systems can reduce strain.
      
      I/O and Storage Improvements:
      Optimize storage performance by leveraging faster disks (e.g., SSDs) or increasing buffer sizes to handle high data rates.
      
      Cost vs. Performance:
      While this setup utilizes resources effectively, evaluate if the current execution time aligns with business requirements. Scaling horizontally can help improve performance without exponentially increasing costs.
      `,
        chartData: {
          executionTime: [4210, 3000], // Base, optimized, distributed
          cpuUtilization: [96, 90],     // Decreasing with better resource allocation
          throughput: [10.20, 12.0],  // Improvements with scaling and tuning
          dataRate: [10.35, 12.5]     // Enhanced by distributed processing
        }
      }
      ,
      "500MB-medium-2": {
        executionTime: "Time: 3789 seconds",
        cpuUtilization: "CPU Utilization: 92%",
        throughput: "Throughput: 11.3 MBPS",
        dataRate: "DataRate: 10.89 MBPS",
        recommendations: `
      Performance Insights:
      The execution time is substantial, suggesting the need for optimization or scaling strategies to handle workloads more efficiently.
      
      Resource Scaling:
      Add additional CPUs or worker nodes to distribute the workload, reducing the execution time significantly.
      
      CPU Load Balancing:
      At 92% utilization, most CPU resources are being consumed. Balancing workloads across multiple nodes or optimizing thread usage can help improve performance.
      
      Throughput Optimization:
      Improve disk I/O or use faster storage systems (e.g., SSDs) to enhance throughput and data handling rates.
      
      Distributed Processing:
      For workloads of this size, consider implementing distributed processing frameworks to improve efficiency and reduce latency.
      
      Cost Considerations:
      While this configuration performs well in terms of resource utilization, it may not be cost-efficient for frequent large-scale processing. Evaluate scaling options to optimize for cost versus performance.
      `,
        chartData: {
          executionTime: [3789, 2700], // Base, optimized, distributed
          cpuUtilization: [92, 88],     // Reduced with scaling and load balancing
          throughput: [11.3, 13.5],   // Improved by scaling and I/O optimization
          dataRate: [10.89, 13.0]     // Enhanced with distributed processing
        }
      }
      ,
      "500MB-medium-3": {
        executionTime: "Time: 3105 seconds",
        cpuUtilization: "CPU Utilization: 85%",
        throughput: "Throughput: 10.98 MBPS",
        dataRate: "DataRate: 10.8 MBPS",
        recommendations: `
      Performance Insights:
      The execution time of 3105 seconds is relatively high, though CPU utilization and throughput show good performance. Optimization is needed for time-critical tasks.
      
      Resource Scaling:
      Introduce additional CPUs or worker nodes to distribute the workload, significantly decreasing execution time.
      
      Optimized Parallel Processing:
      Adjust task distribution across CPUs to better balance the load, minimizing idle times and improving efficiency.
      
      Throughput Enhancement:
      Consider using faster storage solutions or optimizing data processing pipelines to further improve throughput.
      
      Algorithm Refinements:
      Refine the algorithms used to ensure they are efficient for large datasets, which could reduce execution time without adding resources.
      
      Cost-Performance Balance:
      This configuration offers a balanced cost-performance ratio for non-critical tasks. However, scaling resources for better performance is advised for frequent or larger workloads.
      `,
        chartData: {
          executionTime: [3105, 2500], // Base, optimized, distributed
          cpuUtilization: [85, 80],      // Reduced with better load balancing
          throughput: [10.98, 12.5],  // Enhanced with optimization
          dataRate: [10.8, 12.9]       // Improved with distributed processing
        }
      }
      ,
      
      //large instances
      "100MB-large-1": {
        executionTime: "Time: 561 seconds",
        cpuUtilization: "Normalized CPU Utilization: 89.64%",
        throughput: "Throughput: 8.89 MBPS",
        dataRate: "Data Rate: 9.81 MBPS",
        recommendations: `
      Optimize Resource Allocation:
      Increase the number of CPUs to improve throughput and reduce execution time.
      
      Efficient Parallelization:
      For large data sizes, ensure data splits are optimized to maximize CPU utilization and parallel processing.
      
      Cost-Performance Tradeoff:
      Balance between resource allocation (CPU/vCores) and execution time for cost-effective processing.`,
        chartData: {
          executionTime: [561, 400], // Comparing execution time with 2 CPUs or optimized approach
          cpuUtilization: [67.64, 32.36], // CPU Utilization with 1 CPU
          throughput: [70, 30], // Throughput with 1 CPU, needing more CPU to optimize
          dataRate: [75, 25], // Improving data rate with optimal allocation
        }
      },
      "100MB-large-2": {
        executionTime: "Time: 487 seconds",
        cpuUtilization: "Normalized CPU Utilization: 67.68%",
        throughput: "Throughput: 9.89 MBPS",
        dataRate: "Data Rate: 9.8 MBPS",
        recommendations: `
      Data Size Impact:
      For smaller datasets like 100MB, execution time decreases, but throughput remains constant.
      This configuration is cost-effective for medium workloads but may underutilize resources for smaller data sizes.
      
      Resource Optimization:
      If frequent small datasets are expected, consider using fewer CPUs or scaling down the instance type for cost efficiency.
      
      Balance Data Splits:
      Ensure optimized splits for smaller datasets to avoid under-utilization of available resources.`,
        chartData: {
          executionTime: [487, 300], // Execution time comparison for different CPU configurations
          cpuUtilization: [67.68, 32.32], // CPU utilization with 2 CPUs, showing potential for better resource usage
          throughput: [75, 25], // Throughput comparison showing need for further optimization
          dataRate: [70, 30], // Data rate improvements with better parallelization
        }
      }
      ,
      "100MB-large-3": {
        executionTime: "Time: 350 seconds",
        cpuUtilization: "Normalized CPU Utilization: 60%",
        throughput: "Throughput: 8.3 MBPS",
        dataRate: "Data Rate: 8.3 MBPS",
        recommendations: `
      Execution Efficiency:
      Using 3 CPUs significantly reduces execution time compared to 2 CPUs.
      However, per-CPU utilization decreases, indicating under-utilization for smaller datasets.
      
      Cost Efficiency:
      For datasets as small as 100MB, 3 CPUs may not be cost-effective unless the speed gain justifies the resource allocation.
      
      Scaling Considerations:
      Consider using fewer CPUs or smaller instance types for frequent small workloads.
      Save larger CPU configurations for larger datasets to maximize throughput and resource utilization.`,
        chartData: {
          executionTime: [350, 487], // Execution time comparison with 2 vs 3 CPUs
          cpuUtilization: [60, 40], // Utilization comparison showing 3 CPUs underutilized
          throughput: [1.19, 0.89], // Throughput comparison showing the improvement with 3 CPUs
          dataRate: [699.74, 524.8], // Data rate comparison indicating more effective resource use
        }
      }
      ,
      
      "200MB-large-1": {
        executionTime: "Time: 1178 seconds",
        cpuUtilization: "Normalized CPU Utilization: 80%",
        throughput: "Throughput: 7.17 MBPS",
        dataRate: "Data Rate: 8.77 MBPS",
        recommendations: `
      Execution Efficiency:
      Processing sparse matrix multiplication on a single CPU for larger datasets significantly increases execution time.
      Upgrade to 2 or more CPUs to balance execution time and throughput.
      
      Scalability:
      For 200MB data, a single CPU is insufficient for timely execution. Add more CPUs to improve throughput and CPU utilization efficiency.
      
      Cost Optimization:
      For sparse matrix computations, consider distributed processing on multiple nodes to minimize execution time.`,
        chartData: {
          executionTime: [1178, 600], // Execution time with 1 vs 2 CPUs for comparison
          cpuUtilization: [80, 90], // CPU utilization comparison between 1 and 2 CPUs
          throughput: [0.17, 2.5], // Throughput comparison showing improvement with 2 CPUs
          dataRate: [498.77, 1024], // Data rate comparison for increased performance with 2 CPUs
        }
      }
      ,
      "200MB-large-2": {
        executionTime: "654 seconds",
        cpuUtilization: "78%",
        throughput: "10.31 MBPS",
        dataRate: "10.9 MBPS",
        recommendations: `
      Efficiency:
      The utilization of 2 CPUs shows significant improvement in execution time and throughput compared to a single CPU.
      However, CPU usage is still moderate, suggesting room for further optimization in parallel processing.
      
      Scaling:
      For larger datasets, adding a third CPU could further reduce execution time while maintaining a reasonable utilization rate.
      
      Balanced Configuration:
      This setup balances cost and performance better than a single CPU, making it suitable for medium workloads.`,
        chartData: {
          executionTime: [654, 350], // Execution time with 2 CPUs compared to 1 CPU for 200MB data
          cpuUtilization: [78, 90], // CPU utilization comparison showing moderate usage with 2 CPUs
          throughput: [0.31, 1.2], // Throughput comparison showing improvement with more CPUs
          dataRate: [899, 1600], // Data rate comparison showing better performance with 2 CPUs
        }
      }
      ,
      "200MB-large-3": {
        executionTime: "488 seconds",
        cpuUtilization: "65%",
        throughput: "8.42 MBPS",
        dataRate: "10.7 MBPS",
        recommendations: `
      Performance Improvement:
      Adding a third CPU significantly reduces execution time compared to 2 CPUs.
      However, the marginal improvement from 2 CPUs to 3 CPUs is smaller than from 1 CPU to 2 CPUs, indicating overhead from synchronization or communication.
      
      Optimal Scaling:
      For medium workloads, 3 CPUs provide the best balance between speed and resource usage.
      Further scaling (e.g., adding more CPUs) may show diminishing returns unless processing larger datasets.
      
      Resource Allocation:
      Ideal for scenarios with a higher priority for execution time.
      Adjust split sizes or use larger instances for further efficiency.`,
        chartData: {
          executionTime: [654, 488], // Execution time with 2 CPUs compared to 3 CPUs for 200MB data
          cpuUtilization: [78, 65], // CPU utilization comparison showing moderate usage with 3 CPUs
          throughput: [0.31, 0.42], // Throughput comparison showing improvement with more CPUs
          dataRate: [899, 1247], // Data rate comparison showing better performance with 3 CPUs
        }
      }
      ,
      
      "500MB-large-1": {
        executionTime: "2958 seconds",
        cpuUtilization: "97%",
        throughput: "9.17 MBPS",
        dataRate: "9.17 MBPS",
        recommendations: `
      High Execution Time:
      Running on 1 CPU results in extremely high execution time, making it inefficient for such a large dataset.
      Increasing CPU count or upgrading the instance size is recommended.
      
      Low Throughput:
      Throughput is very low due to single CPU constraints and insufficient parallelism.
      Optimize resource usage by splitting the dataset further or utilizing additional CPUs.
      
      For Large Datasets:
      1 CPU is not optimal for processing 500MB data.
      Use a minimum of 2 CPUs to observe significant performance improvements.`,
        chartData: {
          executionTime: [2958], // Execution time for 500MB data with 1 CPU
          cpuUtilization: [97], // CPU utilization comparison showing high CPU usage with 1 CPU
          throughput: [0.17], // Throughput comparison showing low throughput with 1 CPU
          dataRate: [999], // Data rate showing a high rate but limited by CPU constraints
        }
      }
      ,
      "500MB-large-2": {
        executionTime: "1893 seconds",
        cpuUtilization: "87%",
        throughput: "10.31 MBPS",
        dataRate: "10.7 MBPS",
        recommendations: `
      Balanced Resource Usage:
      With 2 CPUs, execution time improves significantly compared to 1 CPU, but the setup is still suboptimal for larger datasets.
      
      Throughput Considerations:
      Throughput increases compared to 1 CPU but remains low for the dataset size. Additional CPUs or parallelization is necessary for better throughput.
      
      Scaling Up:
      For larger datasets, adding more CPUs or worker nodes is necessary to achieve optimal performance and reduce execution time.`,
        chartData: {
          executionTime: [1893], // Execution time for 500MB data with 2 CPUs
          cpuUtilization: [87], // CPU utilization showing moderate resource usage with 2 CPUs
          throughput: [0.31], // Throughput showing improvement over 1 CPU but still low for 500MB
          dataRate: [1797], // Data rate showing moderate increase over 1 CPU configuration
        }
      }
      ,
      "500MB-large-3": {
        executionTime: "1185 seconds",
        cpuUtilization: "82%",
        throughput: "10.42 MBPS",
        dataRate: "10.4 MBPS",
        recommendations: `
      Enhanced Performance:
      Using 3 CPUs significantly reduces execution time, making this configuration ideal for medium workloads.
      
      Improved Throughput:
      Throughput increases slightly compared to 2 CPUs, indicating better resource utilization and more efficient task distribution.
      
      Future Scaling:
      For even larger datasets, increasing worker nodes or moving to a larger instance type will yield better results and minimize execution time further.`,
        chartData: {
          executionTime: [1185], // Execution time for 500MB data with 3 CPUs
          cpuUtilization: [82], // CPU utilization showing high efficiency with 3 CPUs
          throughput: [0.42], // Throughput showing improvement over 2 CPUs but still low for 500MB
          dataRate: [2289], // Data rate showing good utilization compared to the previous setups
        }
      }
      ,
      
    };
  
    // Map configurations for Dijkstra's Algorithm
    const dijkstraMap = {
      "100MB-medium-1": {
        executionTime: "Time: 30 seconds",
        cpuUtilization: "CPU Utilization: 87%",
        throughput: "Throughput: 5.09 MBPS",
        dataRate: "DataRate: 4.09 MBPS",
        recommendations: `
      Scaling for Larger Datasets:
      For larger datasets, consider increasing the number of worker nodes or CPUs to maintain performance. In distributed environments, evaluate whether distributed processing can be effectively implemented. This will help manage the workload more efficiently, especially with larger datasets that require high parallelism.
      
      Performance vs. Cost:
      This configuration strikes a good balance between cost and performance, but may not be optimal for time-critical applications. For tasks that require faster execution times, you may need to scale the resources, such as using larger instances or adding more CPUs.
      
      Tuning and Monitoring:
      Regularly monitor CPU utilization, I/O performance, and network bandwidth to identify bottlenecks that could hinder performance. You can use profiling tools (e.g., gprof, Valgrind) to pinpoint inefficiencies in the code or the task scheduling and adjust accordingly. This ensures better resource allocation and performance tuning over time.
      
      Algorithm Optimization:
      To improve execution time, evaluate the algorithm being used. If necessary, optimize the code to align better with the specific data size and the instance type. Consider using more efficient algorithms, caching frequently used results, or optimizing data access patterns for the given dataset.
      `,
        chartData: {
          executionTime: [30, 25], // Example for different resource configurations (1 CPU, 2 CPUs, 3 CPUs)
          cpuUtilization: [87, 75], // CPU utilization expected to decrease as more CPUs are used
          throughput: [5.09, 60.2], // Throughput increases with more CPUs and resources
          dataRate: [4.09, 56] // Data rate improves as resources are scaled up
        }
      }
      
      ,
      "100MB-medium-2": {
        executionTime: "Time: 22.3 seconds",
        cpuUtilization: "CPU Utilization: 79.82%",
        throughput: "Throughput: 5.8 MBPS",
        dataRate: "DataRate: 5.02 MBPS",
        recommendations: `
      Scaling Resources:
      For larger datasets or higher processing demands, consider adding more CPUs or using worker nodes in a distributed environment. This can lead to improved performance by dividing tasks across more resources. You may also want to upgrade to a larger instance type with more memory or CPUs for significant performance gains.
      
      Optimizing Parallelism:
      To maximize resource usage, ensure that tasks are evenly distributed across CPUs to minimize idle time and improve parallel efficiency. You can also use parallel processing frameworks (e.g., Apache Spark or MapReduce) to better manage workload distribution and parallel execution.
      
      Cost-Performance Balance:
      This configuration strikes a good balance between cost and performance. It’s well-suited for medium-sized datasets or less time-sensitive tasks. If cost efficiency is a priority, and the dataset size is small, consider reducing the resources (e.g., using fewer CPUs or smaller instances) to optimize spending without significantly impacting performance.
      
      Monitoring and Tuning:
      Regularly monitor CPU utilization, execution time, and throughput as datasets and workloads evolve. Use monitoring tools (like CloudWatch or Prometheus) to identify performance bottlenecks and continuously tune the system for optimal resource allocation. Additionally, consider benchmarking performance at different stages and adjusting resources accordingly.
      `,
        chartData: {
          executionTime: [22.3, 10.5], // Example values for execution time at 1, 2, and 3 CPUs (scaled down as we increase resources)
          cpuUtilization: [79.82, 75], // CPU utilization decreases with more CPUs as tasks are better distributed
          throughput: [112, 135], // Throughput increases as more CPUs are used, improving resource utilization
          dataRate: [5.02, 7.6] // Data rate improves with more resources (increased parallelism and more CPU capacity)
        }
      },
      "100MB-medium-3": {
        executionTime: "Time: 18 seconds",
        cpuUtilization: "CPU Utilization: 70%",
        throughput: "Throughput: 5.56 MBPS",
        dataRate: "DataRate: 7.5 MBPS",
        recommendations: `
      Optimize Resource Utilization:
      To reduce execution time further and improve throughput, consider increasing the CPU count or upgrading to a higher instance type. This would enhance the compute power and memory allocation, allowing for better handling of larger datasets and more complex tasks.
      
      Parallel Processing:
      Implementing parallel processing can help by dividing the dataset into smaller splits, which will allow each split to be processed concurrently. This can lead to increased processing speed and reduced execution time, especially for larger datasets.
      
      Improve I/O Efficiency:
      Optimize the data transfer and storage systems to reduce I/O bottlenecks. Efficient data handling and minimizing network delays will improve throughput. Consider using faster storage options and reducing data read/write times by caching frequently accessed data.
      
      Instance Upgrade:
      Upgrading to a larger instance type with more memory or compute capacity can provide better performance for intensive workloads. This ensures the system does not hit resource limits, leading to smoother execution and better throughput.
      
      Application-Specific Optimization:
      Fine-tune application parameters like buffer size and split size to better match the available resources of a medium instance. These adjustments will help with more efficient data processing and resource allocation.
      `,
        chartData: {
          executionTime: [18, 15], // Example for different resource configurations (1 CPU, 2 CPUs, 3 CPUs)
          cpuUtilization: [70, 60], // CPU utilization expected to decrease as more CPUs are used
          throughput: [5.56, 6.5], // Throughput increases with more CPUs and resources
          dataRate: [7.5, 8.5] // Data rate improves with more resources
        }
      }
      ,
      
      "250MB-medium-1": {
        executionTime: "Time: 75 seconds",
        cpuUtilization: "CPU Utilization: 90%",
        throughput: "Throughput: 4.02 MBPS",
        dataRate: "DataRate: 3.5 MBPS",
        recommendations: `
      Add Worker Nodes:
      Increase the number of worker nodes to distribute the workload more effectively, which will improve parallelism and reduce execution time. This is particularly helpful for larger datasets or more complex workloads.
      
      Increase CPUs per Worker:
      Consider adding more CPUs per worker to further reduce execution time. This is especially beneficial for compute-intensive tasks, as more resources will allow faster processing and higher throughput.
      
      Optimize Data Splits:
      Fine-tune the split sizes to better balance the load across worker nodes. Adjusting the split size can help ensure that each node is utilized efficiently, minimizing idle time and improving overall throughput.
      
      Upgrade to Larger Instance:
      For significant performance improvements, upgrading to a larger instance with more memory and higher clock-speed CPUs will help with large-scale tasks. This will reduce resource bottlenecks and speed up processing time.
      
      Tune Application Parameters:
      Optimize application-level configurations like buffer size and data chunking. These optimizations will allow the application to handle the specific workload more efficiently, reducing delays and improving processing time.
      `,
        chartData: {
          executionTime: [75, 45], // Example for different resource configurations (Base, Worker Nodes, Increased CPUs)
          cpuUtilization: [85, 75], // CPU utilization expected to decrease as more CPUs and nodes are added
          throughput: [4.48, 6.0], // Throughput improves with additional worker nodes and CPUs
          dataRate: [4.5, 6.0] // Data rate increases with more resources
        }
      }
      ,
      "250MB-medium-2": {
        executionTime: "Time: 55.75 seconds",
        cpuUtilization: "CPU Utilization: 85%",
        throughput: "Throughput: 4.48 MBPS",
        dataRate: "DataRate: 4.5 MBPS",
        recommendations: `
      Add Worker Nodes:
      Increase the number of worker nodes to distribute the workload more effectively, which will improve parallelism and reduce execution time. This is particularly helpful for larger datasets or more complex workloads.
      
      Increase CPUs per Worker:
      Consider adding more CPUs per worker to further reduce execution time. This is especially beneficial for compute-intensive tasks, as more resources will allow faster processing and higher throughput.
      
      Optimize Data Splits:
      Fine-tune the split sizes to better balance the load across worker nodes. Adjusting the split size can help ensure that each node is utilized efficiently, minimizing idle time and improving overall throughput.
      
      Upgrade to Larger Instance:
      For significant performance improvements, upgrading to a larger instance with more memory and higher clock-speed CPUs will help with large-scale tasks. This will reduce resource bottlenecks and speed up processing time.
      
      Tune Application Parameters:
      Optimize application-level configurations like buffer size and data chunking. These optimizations will allow the application to handle the specific workload more efficiently, reducing delays and improving processing time.
      `,
        chartData: {
          executionTime: [55.75, 45], // Example for different resource configurations (Base, Worker Nodes, Increased CPUs)
          cpuUtilization: [85, 75], // CPU utilization expected to decrease as more CPUs and nodes are added
          throughput: [4.48, 6.0], // Throughput improves with additional worker nodes and CPUs
          dataRate: [4.5, 6.05] // Data rate increases with more resources
        }
      }
      ,
      "250MB-medium-3": {
        executionTime: "Time: 50 seconds",
        cpuUtilization: "CPU Utilization: 80%",
        throughput: "Throughput: 4.5 MBPS",
        dataRate: "dataRate: 4.5 MBPS",
        recommendations: `Scale Resources:

        Add CPUs or worker nodes to process data faster and improve throughput and execution time.
        Upgrade to a larger instance type for workloads requiring higher computational power.
        Optimize Task Distribution:
        
        Balance workload distribution across CPUs to ensure full resource utilization and avoid idle times.
        Improve Algorithm Efficiency:
        
        Revisit the algorithm to optimize logic and reduce processing overhead.
        Monitor and Tune:
        
        Regularly analyze performance metrics to identify bottlenecks and adjust configurations accordingly.
        Cost-Efficiency:
        
        This configuration is cost-efficient for medium workloads. Scale resources only for larger datasets or faster processing needs.
        `,
        chartData: {
          executionTime: [50, 50],
          cpuUtilization: [80, 60],
          throughput: [4.5, 9,5],
          dataRate: [4.5, 9,5],
        },
      },
      
      "500MB-medium-1": {
        executionTime: "Time: 150 seconds",
        cpuUtilization: "CPU Utilization: 95%",
        throughput: "Throughput: 2.5 MBPS",
        dataRate: "dataRate: 2.5 MBPS",
        recommendations: `Scale Resources:

        Add CPUs or worker nodes to reduce execution time and improve throughput for large workloads.
        Upgrade to a larger instance type for increased computational power and memory bandwidth.
        Optimize Configurations:
        
        Fine-tune task sizes, split sizes, and scheduling to balance workloads and avoid resource contention.
        Algorithm Refinement:
        
        Evaluate and optimize the algorithm to ensure it is suited for the dataset size and resource configuration.
        Monitor System Performance:
        
        Continuously track CPU, memory, and I/O usage to identify bottlenecks and adjust configurations accordingly.
        Cost-Performance Tradeoff:
        
        While this configuration is efficient for small workloads, it is less cost-effective for larger datasets. Scaling resources is essential for higher efficiency.
        `,
        chartData: {
          executionTime: [15, 88],
          cpuUtilization: [95, 5],
          throughput: [2.5, 34,57],
          dataRate: [2.5, 34,57],
        },
      },
      "500MB-medium-2": {
        executionTime: "Time: 110 seconds",
        cpuUtilization: "CPU Utilization: 85%",
        throughput: "Throughput: 4 MBPS",
        dataRate: "dataRate: 4 MBPS",
        recommendations: `Resource Scaling:

        Add CPUs or worker nodes to reduce execution time and enhance throughput.
        Upgrade to a larger instance for better computational power and memory bandwidth.
        Configuration Optimization:
        
        Fine-tune split sizes, task scheduling, and buffer sizes to balance workloads and maximize resource utilization.
        Algorithm Refinement:
        
        Optimize the algorithm to reduce complexity and eliminate inefficiencies for faster processing.
        Monitor Performance:
        
        Regularly monitor CPU, memory, and I/O usage to identify bottlenecks and adjust configurations.
        Cost-Effectiveness:
        
        This configuration is suitable for medium workloads but requires scaling for larger datasets or faster results.`,
        chartData: {
          executionTime: [11, 88],
          cpuUtilization: [85, 15],
          throughput: [4.7, 58.3],
          dataRate: [4.7, 58],
        },
      },
      "500MB-medium-3": {
        executionTime: "Time: 85 seconds",
        cpuUtilization: "CPU Utilization: 80%",
        throughput: "Throughput: 5.5 MBPS",
        dataRate: "dataRate: 5.5 MBPS",
        recommendations: `Scaling Resources:

        Add CPUs or worker nodes to handle workloads more efficiently and reduce execution time.
        Upgrade to instances with better computational and memory capabilities.
        Configuration Optimization:
        
        Optimize task scheduling, buffer sizes, and split sizes to maximize resource utilization.
        Algorithm Refinement:
        
        Evaluate and optimize the algorithm for better performance and reduced processing overhead.
        Monitoring and Tuning:
        
        Continuously monitor system performance to identify and address bottlenecks.
        Cost-Efficiency:
        
        This configuration is cost-effective for medium workloads. For larger datasets or faster results, consider scaling resources.`,
        chartData: {
          executionTime: [85, 15],
          cpuUtilization: [80, 20],
          throughput: [5.57, 58.3],
          dataRate: [5.57, 58.3],
        },
      },
      
      //large instances

      "100MB-large-1": {
        executionTime: "19.5 seconds",
        cpuUtilization: "74%",
        throughput: "6 MBPS",
        dataRate: "5.64 MBPS",
        recommendations: `
      Leverage Larger Instances:
      Continue using larger instances for datasets of this size or complexity, as they provide better performance per unit of time.
      
      Optimize Algorithm Implementation:
      Consider implementing parallel versions of Dijkstra's algorithm (e.g., using MapReduce or Spark) to further speed up processing. Reducing unnecessary computations by pre-filtering data or limiting the scope of the graph traversal will help improve performance.
      
      Evaluate Cost-Effectiveness:
      Balance execution time improvements against the cost of running large instances. For workloads that tolerate longer execution times, medium instances may still be a more cost-efficient choice, especially for smaller datasets.
      
      Monitor Resource Utilization:
      Regularly monitor CPU, memory, and network utilization to identify bottlenecks and optimize system performance further. This will ensure that CPU utilization remains optimal and prevents overuse of resources, ensuring efficiency across the system.`,
        chartData: {
          executionTime: [19.5, 20], // Execution time for 100MB data with 1 CPU
          cpuUtilization: [74, 20], // CPU utilization showing good efficiency with 1 CPU
          throughput: [6, 20], // Throughput indicating moderate data processing speed
          dataRate: [5.64, 20], // Data rate showing reasonable processing capacity
        }
      }
      ,
      "100MB-large-2": {
        executionTime: "10.84 seconds",
        cpuUtilization: "68%",
        throughput: "9.23 MBPS",
        dataRate: "8.77 MBPS",
        recommendations: `
      Efficiency:
      Using 2 CPUs significantly reduces execution time and increases throughput, making this configuration ideal for small datasets on a large instance.
      
      Resource Allocation:
      To achieve optimal performance, ensure full CPU utilization by further optimizing parallelism. This can be done by effectively partitioning tasks and balancing workload distribution.
      
      Scaling for Larger Workloads:
      For larger datasets, adding more CPUs or scaling horizontally with worker nodes would yield further performance benefits. Keep monitoring the utilization to ensure that resources are not underutilized as the dataset grows.
      
      Cost-Efficiency:
      If frequent small datasets are expected, consider balancing the trade-off between using larger instances for performance and optimizing for cost by choosing instances with fewer CPUs for such workloads. By scaling based on needs, you can achieve a more cost-effective setup.`,
        chartData: {
          executionTime: [10.84, 50], // Execution time for 100MB data with 2 CPUs
          cpuUtilization: [68, 50], // CPU utilization showing moderate efficiency with 2 CPUs
          throughput: [9.23, 50], // Throughput indicating better data processing speed
          dataRate: [8.77, 50], // Data rate indicating higher processing capacity than 1 CPU
        }
      }
      ,
      "100MB-large-3": {
        executionTime: "7.8 seconds",
        cpuUtilization: "63%",
        throughput: "12.82 MBPS",
        dataRate: "12.18 MBPS",
        recommendations: `
      Maximum Efficiency:
      Using 3 CPUs further reduces the execution time to 7.8 seconds, achieving near-optimal resource utilization for small datasets. This setup is highly efficient for processing 100MB datasets.
      
      Cost vs. Performance:
      While 3 CPUs improves execution time, for smaller datasets like 100MB, the benefit of using 3 CPUs may not justify the additional cost over using 2 CPUs. However, if minimizing execution time is critical for your application, this configuration is ideal.
      
      Scaling Consideration:
      For larger datasets, scaling with more CPUs or using worker nodes will continue to enhance performance. For small datasets, though, the performance gain from 3 CPUs may be marginal compared to 2 CPUs.
      
      Cost Efficiency:
      For small datasets, using 2 CPUs may offer a better balance between cost and performance. Only use 3 CPUs if execution time is a priority for time-sensitive tasks.`,
        chartData: {
          executionTime: [7.8, 60], // Execution time for 100MB data with 3 CPUs
          cpuUtilization: [63, 30], // CPU utilization indicating near-optimal resource usage
          throughput: [12.82, 80], // Throughput shows faster data processing
          dataRate: [12.18, 60], // Data rate showing higher efficiency than 2 CPUs
        }
      }
      ,
      
      "250MB-large-1": {
        executionTime: "53.87 seconds",
        cpuUtilization: "80%",
        throughput: "5.13 MBPS",
        dataRate: "5.13 MBPS",
        recommendations: `
      Enhanced Efficiency:
      Using a larger instance provides a significant improvement in execution time and throughput, making it more suitable for medium to large datasets like 250MB.
      
      Scaling for Larger Workloads:
      For datasets larger than 250MB, adding more CPUs or using worker nodes will help maintain efficient processing and avoid bottlenecks as the workload increases.
      
      Cost vs. Performance:
      For smaller datasets, a medium instance may still suffice, as it balances cost and performance. If minimizing execution time is a priority for your application, especially with larger datasets, a large instance will offer better performance.
      
      Monitor Resource Utilization:
      Regularly monitor CPU utilization and throughput to identify any potential bottlenecks or resource underutilization, ensuring that scaling is done at the right time.`,
        chartData: {
          executionTime: [53.87, 50], // Execution time for 250MB data with single CPU
          cpuUtilization: [80, 20], // CPU utilization is at 80%, efficient but not fully optimized
          throughput: [5.13, 80], // Throughput for 250MB data processed on a single CPU
          dataRate: [5.13, 80], // Data rate, matching throughput, indicates efficient handling
        }
      }
      ,
      "250MB-large-2": {
        executionTime: "32.4 seconds",
        cpuUtilization: "72%",
        throughput: "9.22 MBPS",
        dataRate: "9.22 MBPS",
        recommendations: `
      Efficiency:
      Using 2 CPUs significantly reduces execution time and increases throughput, making this configuration ideal for medium-sized datasets like 250MB.
      
      Scaling for Larger Workloads:
      For datasets beyond 250MB, adding more CPUs or scaling with worker nodes will further improve performance, reducing execution time and ensuring consistent throughput.
      
      Resource Optimization:
      If execution time is not a critical factor, you may use 1 CPU to save costs. However, if faster processing is required, 2 CPUs should be used for optimal performance with medium-sized datasets.`,
        chartData: {
          executionTime: [32.4, 80], // Execution time for 250MB data with 2 CPUs
          cpuUtilization: [72, 20], // CPU utilization at 72%, optimal for the given load
          throughput: [9.22, 80], // Throughput for 250MB data processed on 2 CPUs
          dataRate: [9.22, 80], // Data rate, matching throughput, indicates good data handling
        }
      }
      ,
      "250MB-large-3": {
        executionTime: "25 seconds",
        cpuUtilization: "65%",
        throughput: "12.82 MBPS",
        dataRate: "12.87 MBPS",
        recommendations: `
      Efficiency:
      Using 3 CPUs provides the best performance for processing 250MB datasets. The execution time is reduced to 25 seconds, and throughput increases, making it ideal for workloads of this size.
      
      Cost vs. Performance:
      Although 3 CPUs deliver superior performance, assess if the added cost is justified for smaller datasets. For most medium workloads, 2 CPUs may offer better cost efficiency without sacrificing too much performance.
      
      Scaling for Larger Workloads:
      For datasets larger than 250MB, this configuration can serve as a baseline. However, instead of adding more CPUs, scaling horizontally by adding worker nodes might be a more efficient approach to handle larger datasets with optimal performance.`,
        chartData: {
          executionTime: [25, 75], // Execution time for 250MB data with 3 CPUs
          cpuUtilization: [65, 35], // CPU utilization at 65%, well-utilized but leaves room for scaling
          throughput: [12.82, 80], // Throughput for 250MB data processed on 3 CPUs
          dataRate: [12.87, 80], // Data rate, slightly higher than throughput, shows efficient data transfer
        }
      }
      ,
      
      "500MB-large-1": {
        executionTime: "99.8 seconds",
        cpuUtilization: "96%",
        throughput: "5.13 MBPS",
        dataRate: "5.88 MBPS",
        recommendations: `
      Performance:
      The current configuration with 1 CPU shows acceptable performance for 500MB data, but the execution time of 99.8 seconds is considerably high for time-sensitive tasks. This setup is not ideal for workloads requiring faster processing.
      
      Scaling for Efficiency:
      Adding more CPUs (2 or 3) would significantly reduce execution time and increase throughput, especially for larger datasets like 500MB. The current setup reaches 96% CPU utilization, but the lack of parallelism limits overall performance.
      
      Cost vs. Performance:
      For cost efficiency, this configuration works for occasional or less critical processing tasks. However, for frequent or critical workloads, upgrading to multiple CPUs or a distributed system would provide a better balance of cost and performance, reducing execution time and improving throughput substantially.`,
        chartData: {
          executionTime: [99.8, 1], // Execution time for 500MB data with 1 CPU
          cpuUtilization: [96, 4], // CPU utilization at 96%, indicating the CPU is heavily utilized but could benefit from more parallelism
          throughput: [5.13, 95], // Throughput for 500MB data processed on 1 CPU
          dataRate: [5.88, 95], // Data rate, showing efficient data transfer but limited by the single CPU
        }
      }
      ,
      "500MB-large-2": {
        executionTime: "63.7 seconds",
        cpuUtilization: "85%",
        throughput: "9.23 MBPS",
        dataRate: "9.06 MBPS",
        recommendations: `
      Efficiency:
      With 2 CPUs, the execution time is reduced significantly to 63.7 seconds, and throughput is improved to 9.23 MBPS. This makes the configuration suitable for medium to large datasets like 500MB.
      
      Cost vs. Performance:
      For workloads like 500MB data, this setup provides a good balance of cost and performance. It delivers noticeable improvements over a single CPU configuration while maintaining a reasonable cost.
      
      Further Scaling:
      For datasets exceeding 500MB, consider adding additional worker nodes for distributed processing or upgrading to 3 CPUs for even faster execution. If time is a critical factor, scaling further will provide diminishing returns unless the dataset increases substantially.`,
        chartData: {
          executionTime: [63.7, 30], // Execution time for 500MB data with 2 CPUs
          cpuUtilization: [85, 15], // CPU utilization is at 85%, indicating high usage but still with potential for further optimization
          throughput: [9.23, 90], // Throughput for 500MB data processed with 2 CPUs
          dataRate: [9.06, 90], // Data rate is improving as more CPU resources are utilized
        }
      }
      ,
      "500MB-large-3": {
        executionTime: "45 seconds",
        cpuUtilization: "78%",
        throughput: "12.93 MBPS",
        dataRate: "12.87 MBPS",
        recommendations: `
      Performance Optimization:
      With 3 CPUs, this configuration achieves the best performance for processing 500MB data, reducing execution time to 45 seconds, which is significantly faster than with 1 or 2 CPUs. This setup provides optimal efficiency for medium to large datasets.
      
      Cost Efficiency:
      For larger datasets or time-sensitive workloads, using 3 CPUs offers the best balance between performance and resource usage. For smaller datasets, you may consider reducing the number of CPUs to save on costs, as fewer CPUs may suffice for such workloads.
      
      Scalability:
      For datasets exceeding 500MB, consider distributing the workload across multiple worker nodes to maintain high performance. Adding more CPUs beyond 3 may lead to diminishing returns, and using distributed systems can optimize resource usage for even larger datasets.`,
        chartData: {
          executionTime: [45, 55], // Execution time for 500MB data with 3 CPUs
          cpuUtilization: [78, 30], // CPU utilization is at 78%, indicating efficient resource use
          throughput: [12.93, 30], // Throughput for 500MB data processed with 3 CPUs
          dataRate: [12.87, 30], // Data rate for 500MB processed with 3 CPUs, indicating optimal resource usage
        }
      }
      ,
      
    };
  
    // Select the appropriate map based on the algorithm
    const selectedMap =
      algorithm === "sorting"
        ? sortingMap
        : algorithm === "matrix multiplication"
        ? matrixMultiplicationMap
        : dijkstraMap;
  
    // Create a unique key for the current configuration
    const configKey = `${dataSizeOption}-${instance}-${cpusPerWorker}`;
  
    // Return analysis for the matched configuration, or default response
    return selectedMap[configKey] || {
      executionTime: "No specific analysis available for the selected configuration.",
      cpuUtilization: "No specific analysis available for the selected configuration.",
      throughput: "No specific analysis available for the selected configuration.",
      dataRate: "No specific analysis available for the selected configuration.",
      recommendations: "No specific observations or recommendations available for the selected configuration.",
      chartData: {
        executionTime: [0, 100],
        cpuUtilization: [0, 100],
        throughput: [0, 100],
        dataRate: [0, 100],
      },
    };
  };
  