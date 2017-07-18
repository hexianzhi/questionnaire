export function saveToLocal(id) {
	 window.localStorage.__page_id = id;
};

export function loadFromLocal() {
	return window.localStorage.__page_id;
};

export function loadDataById(id) {
  return data[id];
}

export function loadAllData() {
  return data;
}

var data = [
  {
    "id": 1,
    "title": "第一份问卷",
    "endTime": "2016-4-30",
    "textarea": [
      1
    ],
    "checkbox": [
      1
    ],
    "radio": [
      1
    ],
    "status": "1"
  },
  {
    "id": 2,
    "title": "第二份问卷",
    "endTime": "2016-4-20",
    "textarea": [
      2
    ],
    "checkbox": [
      2
    ],
    "radio": [
      2
    ],
    "status": "2"
  },
  {
    "id": 3,
    "title": "第三份问卷",
    "endTime": "2016-5-20",
    "textarea": [
      3
    ],
    "checkbox": [
      3
    ],
    "radio": [
      3
    ],
    "status": "0"
  }

];
