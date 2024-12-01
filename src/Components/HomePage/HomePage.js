import React, { useState } from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleCustomize = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    setShowRecommendation(true); // Show the recommendation panel
  };

  return (
    <div>
        <Navbar></Navbar>
    <div className="homepage-container">
      <header className="header">
        <h1>Welcome to <span className="highlight">CodeScope</span>!</h1>
        <p>Access your personalized code solutions here.</p>
      </header>

      <div className="content">
        <div className="left-panel">
          <form className="form" onSubmit={handleCustomize}>
            <label className="blue-label">Choose Your Algorithm</label>
            <select>
              <option value="sorting">Sorting Algorithm</option>
              <option value="matrix-multiplication">Matrix Multiplication</option>
              <option value="dijkstra">Dijkstra's Algorithm</option>
            </select>

            <label className="blue-label">CPU Intensive</label>
            <select>
              <option value="less">Less</option>
              <option value="medium">Medium</option>
              <option value="more">More</option>
            </select>

            <label className="blue-label">Response Time</label>
            <select>
              <option value="less">Less</option>
              <option value="medium">Medium</option>
              <option value="more">More</option>
            </select>

            <label className="blue-label">Latency</label>
            <select>
              <option value="less">Less</option>
              <option value="medium">Medium</option>
              <option value="more">More</option>
            </select>

            <label className="blue-label">Dataset Size</label>
            <select>
              <option value="less">Less</option>
              <option value="medium">Medium</option>
              <option value="more">More</option>
            </select>

            <button type="submit">Customize</button>
          </form>
        </div>

        <div className="right-panel">
          {/* Show this text initially */}
          {!showRecommendation && (
            <p className="info-text">
              {/* Unlock tailored code suggestions designed just for you! Transform your inputs into smart, personalized solutions. */}
            </p>
          )}

          {/* Show the recommendation and code panel after clicking "Customize" */}
          {showRecommendation && (
            <>
              <div className="recommendation">
                <h3>Our Recommendation</h3>
                <p>
                  If you need a balance between cost and performance for moderate workloads, 
                  the M3.medium instance is a good choice. It provides 1 vCPU and 3.75 GB of 
                  memory, suitable for small databases, web servers, or development environments.
                </p>
              </div>
              <div className="code-snippet">
                <div className="code-header">
                  <span>Mergesort.java</span>
                  <button>Copy</button>
                </div>
                <pre>
                {`public class MergeSort {

                // Main method to test the merge sort
                public static void main(String[] args) {
                    int[] array = {12, 11, 13, 5, 6, 7};
                    System.out.println("Unsorted Array:");
                    printArray(array);

                    mergeSort(array, 0, array.length - 1);

                    System.out.println("\nSorted Array:");
                    printArray(array);
                }

                // Recursive method to divide the array and sort
                public static void mergeSort(int[] array, int left, int right) {
                    if (left < right) {
                        int mid = left + (right - left) / 2;

                        // Sort first and second halves
                        mergeSort(array, left, mid);
                        mergeSort(array, mid + 1, right);

                        // Merge the sorted halves
                        merge(array, left, mid, right);
                    }
                }

                // Method to merge two subarrays
                public static void merge(int[] array, int left, int mid, int right) {
                    int n1 = mid - left + 1;
                    int n2 = right - mid;

                    // Temporary arrays
                    int[] leftArray = new int[n1];
                    int[] rightArray = new int[n2];

                    // Copy data to temporary arrays
                    for (int i = 0; i < n1; i++) {
                        leftArray[i] = array[left + i];
                    }
                    for (int j = 0; j < n2; j++) {
                        rightArray[j] = array[mid + 1 + j];
                    }

                    // Merge the temporary arrays

                    int i = 0, j = 0;
                    int k = left;
                    while (i < n1 && j < n2) {
                        if (leftArray[i] <= rightArray[j]) {
                            array[k] = leftArray[i];
                            i++;
                        } else {
                            array[k] = rightArray[j];
                            j++;
                        }
                        k++;
                    }

                    // Copy remaining elements of leftArray[] if any
                    while (i < n1) {
                        array[k] = leftArray[i];
                        i++;
                        k++;
                    }

                    // Copy remaining elements of rightArray[] if any
                    while (j < n2) {
                        array[k] = rightArray[j];
                        j++;
                        k++;
                    }
                }

                // Utility method to print an array
                public static void printArray(int[] array) {
                    for (int value : array) {
                        System.out.print(value + " ");
                    }
                    System.out.println();
                }
                }
                `}
                </pre>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
