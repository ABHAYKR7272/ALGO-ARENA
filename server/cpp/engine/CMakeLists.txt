cmake_minimum_required(VERSION 3.14)
project(AlgoArenaEngine)

set(CMAKE_CXX_STANDARD 17)

include(FetchContent)
FetchContent_Declare(json
  URL https://github.com/nlohmann/json/releases/download/v3.11.3/json.tar.xz
)
FetchContent_MakeAvailable(json)

add_executable(runner
  runner.cpp
  ../algorithms/bubble_sort.cpp
  ../algorithms/merge_sort.cpp
)

target_link_libraries(runner PRIVATE nlohmann_json::nlohmann_json)
