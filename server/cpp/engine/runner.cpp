#include <iostream>
#include <vector>
#include <string>
#include <nlohmann/json.hpp>
#include "../algorithms/bubble_sort.h"
#include "../algorithms/merge_sort.h"

using json = nlohmann::json;

int main(int argc, char* argv[]) {
    if (argc < 3) {
        std::cerr << "{\"error\":\"Usage: runner <algorithm> <json_array>\"}" << std::endl;
        return 1;
    }

    std::string algo = argv[1];
    std::string input = argv[2];

    try {
        json parsed = json::parse(input);
        std::vector<int> arr = parsed.get<std::vector<int>>();
        json result;

        if      (algo == "bubble_sort") result = bubbleSort(arr);
        else if (algo == "merge_sort")  result = mergeSort(arr);
        else {
            std::cout << "{\"error\":\"Unknown algorithm: " << algo << "\"}" << std::endl;
            return 1;
        }

        std::cout << result.dump() << std::endl;
        return 0;

    } catch (const std::exception& e) {
        std::cout << "{\"error\":\"" << e.what() << "\"}" << std::endl;
        return 1;
    }
}
