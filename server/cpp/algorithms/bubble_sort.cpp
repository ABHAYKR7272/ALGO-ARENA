#include "bubble_sort.h"
#include <vector>
#include <nlohmann/json.hpp>

using json = nlohmann::json;

json bubbleSort(std::vector<int> arr) {
    json steps = json::array();
    int n = arr.size();
    bool swapped;

    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            // Compare step
            json step;
            step["type"]    = "compare";
            step["indices"] = {j, j + 1};
            step["array"]   = arr;
            steps.push_back(step);

            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;

                // Swap step
                json swapStep;
                swapStep["type"]    = "swap";
                swapStep["indices"] = {j, j + 1};
                swapStep["array"]   = arr;
                steps.push_back(swapStep);
            }
        }
        // Mark sorted
        json sortedStep;
        sortedStep["type"]    = "sorted";
        sortedStep["indices"] = {n - 1 - i};
        sortedStep["array"]   = arr;
        steps.push_back(sortedStep);

        if (!swapped) break;
    }

    return steps;
}
