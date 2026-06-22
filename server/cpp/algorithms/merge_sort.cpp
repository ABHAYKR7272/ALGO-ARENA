#include "merge_sort.h"
#include <vector>
#include <nlohmann/json.hpp>

using json = nlohmann::json;
static json* stepsPtr = nullptr;

void merge(std::vector<int>& arr, int l, int m, int r) {
    std::vector<int> left(arr.begin()+l, arr.begin()+m+1);
    std::vector<int> right(arr.begin()+m+1, arr.begin()+r+1);
    int i=0, j=0, k=l;

    while (i < (int)left.size() && j < (int)right.size()) {
        json step;
        step["type"]    = "compare";
        step["indices"] = {l+i, m+1+j};
        step["array"]   = arr;
        stepsPtr->push_back(step);

        if (left[i] <= right[j]) arr[k++] = left[i++];
        else                     arr[k++] = right[j++];

        json mergeStep;
        mergeStep["type"]    = "merge";
        mergeStep["indices"] = {k-1};
        mergeStep["array"]   = arr;
        stepsPtr->push_back(mergeStep);
    }
    while (i < (int)left.size())  { arr[k++] = left[i++]; }
    while (j < (int)right.size()) { arr[k++] = right[j++]; }
}

void mergeSortHelper(std::vector<int>& arr, int l, int r) {
    if (l >= r) return;
    int m = l + (r - l) / 2;
    mergeSortHelper(arr, l, m);
    mergeSortHelper(arr, m+1, r);
    merge(arr, l, m, r);
}

json mergeSort(std::vector<int> arr) {
    json steps = json::array();
    stepsPtr = &steps;
    mergeSortHelper(arr, 0, arr.size()-1);
    return steps;
}
