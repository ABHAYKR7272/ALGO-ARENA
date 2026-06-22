export const SOCKET_EVENTS = {
  CREATE_ROOM:    'create_room',
  JOIN_ROOM:      'join_room',
  ROOM_CREATED:   'room_created',
  ROOM_JOINED:    'room_joined',
  ROOM_FULL:      'room_full',
  PLAYER_JOINED:  'player_joined',
  PLAYER_LEFT:    'player_left',
  BATTLE_START:   'battle_start',
  BATTLE_END:     'battle_end',
  STEP_UPDATE:    'step_update',
  ALGO_SELECTED:  'algo_selected',
  SURRENDER:      'surrender',
  TIMER_TICK:     'timer_tick',
  TIMER_END:      'timer_end',
  JUDGE_START:    'judge_start',
  JUDGE_RESULT:   'judge_result',
  ERROR:          'error',
}

export const XP_WIN  = 150
export const XP_LOSE = 30
export const XP_DRAW = 75
export const BATTLE_DURATION = 180
