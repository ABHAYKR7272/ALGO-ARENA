export const SOCKET_EVENTS = {
  // Room events
  CREATE_ROOM:    'create_room',
  JOIN_ROOM:      'join_room',
  ROOM_CREATED:   'room_created',
  ROOM_JOINED:    'room_joined',
  ROOM_FULL:      'room_full',
  PLAYER_JOINED:  'player_joined',
  PLAYER_LEFT:    'player_left',

  // Battle events
  BATTLE_START:   'battle_start',
  BATTLE_END:     'battle_end',
  STEP_UPDATE:    'step_update',
  ALGO_SELECTED:  'algo_selected',
  SURRENDER:      'surrender',

  // Timer events
  TIMER_TICK:     'timer_tick',
  TIMER_END:      'timer_end',

  // AI Judge events
  JUDGE_START:    'judge_start',
  JUDGE_RESULT:   'judge_result',

  // Errors
  ERROR:          'error',
}

export const ALGORITHMS = {
  BUBBLE_SORT:  { id: 'bubble_sort',  name: 'Bubble Sort',  complexity: 'O(n²)',       category: 'sorting' },
  MERGE_SORT:   { id: 'merge_sort',   name: 'Merge Sort',   complexity: 'O(n log n)',  category: 'sorting' },
  QUICK_SORT:   { id: 'quick_sort',   name: 'Quick Sort',   complexity: 'O(n log n)',  category: 'sorting' },
  BFS:          { id: 'bfs',          name: 'BFS',          complexity: 'O(V+E)',      category: 'graph'   },
  DFS:          { id: 'dfs',          name: 'DFS',          complexity: 'O(V+E)',      category: 'graph'   },
  DIJKSTRA:     { id: 'dijkstra',     name: 'Dijkstra',     complexity: 'O(V log V)',  category: 'graph'   },
}

export const BATTLE_DURATION = 180  // 3 minutes in seconds
export const MAX_PLAYERS     = 2
export const XP_WIN          = 150
export const XP_LOSE         = 30
export const XP_DRAW         = 75
