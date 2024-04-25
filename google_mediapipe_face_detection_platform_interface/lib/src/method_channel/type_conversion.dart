import 'dart:ui';

Rect? rectFromJson(Map<String, dynamic>? json) {
  return json?.isEmpty ?? true
      ? null
      : Rect.fromLTRB(
          json?['left'],
          json?['top'],
          json?['right'],
          json?['bottom'],
        );
}

Map<String, dynamic>? jsonFromRect(Rect? rect) => rect == null
    ? null
    : {
        'left': rect.left,
        'top': rect.top,
        'right': rect.right,
        'bottom': rect.bottom,
      };
