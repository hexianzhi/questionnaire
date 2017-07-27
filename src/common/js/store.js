
//编辑时保存所点击的文件
export function saveToLocal(id) {
  window.localStorage.__page_id = id;
};

//加载指定问卷
export function loadFromLocal() {
  let index = data.findIndex((element) =>{
    console.log(typeof element.id)
    //== 号可以,storage 对象是 String
    return element.id == window.localStorage.__page_id
  });
  return data[index]
};


//表明这是新建的问卷
export function SetNewPage() {
  isNew = true;
}
export function isNewPage() {
  //用于edti.vue 判断是否是新页面，判断过一次就得重置状态，下一次 edti.vue 才能正确读取数据
   let temp = isNew;
   isNew = false;
  return temp;
}


//新建问卷
export function loadNewQn() {
  data.push(newPage)
  return newPage;
};



//保存问卷
export function saveQuestion(qn) {
  //id 其实并没有作用
  let index = data.findIndex((element) =>{
    console.log("element.id : "+ element.id)
    return element.id == qn.id
  });
  data[index] = qn;
}


var randomId = function () {
  return Math.floor(Math.random() * ( 1000 - 1) + 1)
}

var isNew = false;
var newPage = {
  "id": randomId(),
  "title": "第一份问卷",
  "endTime": "2016-04-30",
  "status": "0",
  topics:[
    {
      "id": 1,
      "title": "单选题1",
      "options": ["选项一", "选项二"],
      "necessary": true,
      "type": "radio"
    },
    {
      "id": 3,
      "title": "多选题1",
      "options": ["选项一", "选项二", "选项三"],
      "necessary": true,
      "type": "checkbox"
    },
    {
      "id": 6,
      "title": "文本框1",
      "necessary": true,
      "type": "textarea"
    }
  ]
}

export function loadAllData() {
  return data;
};


var data = [
  {
    "id": 1,
    "title": "第一份问卷",
    "endTime": "2016-04-30",
    "status": "0",
    topics: [
      {
        "id": 1,
        "title": "单选题1",
        "options": ["选项一","选项二"],
        "necessary": true,
        "type": "radio"
      },
      {
        "id": 2,
        "title": "单选题2",
        "options": ["选项一", "选项二"],
        "necessary": true,
        "type": "radio"
      },
      {
        "id": 45,
        "title": "单选题3",
        "options": ["选项一", "选项二","选项一"],
        "necessary": true,
        "type": "radio"
      },
      {
        "id": 3,
        "title": "多选题1",
        "options": ["选项一","选项二","选项二"],
        "necessary": true,
        "type": "checkbox"
      }, {
        "id": 4,
        "title": "多选题2",
        "options": ["选项一", "选项二","选项二"],
        "necessary": true,
        "type": "checkbox"
      }, {
        "id": 5,
        "title": "多选题3",
        "options": ["选项一", "选项二", "选项三"],
        "necessary": true,
        "type": "checkbox"
      },
      {
        "id": 6,
        "title": "文本框1",
        "necessary": true,
        "type": "textarea"
      }
    ]
  },
  {
    "id": 2,
    "title": "第二份问卷",
    "endTime": "2016-07-30",
    "status": "0",
    topics: [
      {
        "id": 1,
        "title": "单选题1",
        "options": ["选项一","选项二"],
        "necessary": true,
        "type": "radio"
      },
      {
        "id": 2,
        "title": "单选题2",
        "options": ["选项一", "选项二"],
        "necessary": true,
        "type": "radio"
      },
      {
        "id": 45,
        "title": "单选题3",
        "options": ["选项一", "选项二","选项一"],
        "necessary": true,
        "type": "radio"
      },
      {
        "id": 3,
        "title": "多选题1",
        "options": ["选项一","选项二","选项二"],
        "necessary": true,
        "type": "checkbox"
      }, {
        "id": 4,
        "title": "多选题2",
        "options": ["选项一", "选项二","选项二"],
        "necessary": true,
        "type": "checkbox"
      }, {
        "id": 5,
        "title": "多选题3",
        "options": ["选项一", "选项二", "选项三"],
        "necessary": true,
        "type": "checkbox"
      },
      {
        "id": 6,
        "title": "文本框1",
        "necessary": true,
        "type": "textarea"
      }
    ]
  },
  {
    "id": 3,
    "title": "第三份问卷",
    "endTime": "2016-11-30",
    "status": "0",
    topics: [
      {
        "id": 1,
        "title": "单选题1",
        "options": ["选项一","选项二"],
        "necessary": true,
        "type": "radio"
      },
      {
        "id": 2,
        "title": "单选题2",
        "options": ["选项一", "选项二"],
        "necessary": true,
        "type": "radio"
      },
      {
        "id": 45,
        "title": "单选题3",
        "options": ["选项一", "选项二","选项一"],
        "necessary": true,
        "type": "radio"
      },
      {
        "id": 3,
        "title": "多选题1",
        "options": ["选项一","选项二","选项二"],
        "necessary": true,
        "type": "checkbox"
      }, {
        "id": 4,
        "title": "多选题2",
        "options": ["选项一", "选项二","选项二"],
        "necessary": true,
        "type": "checkbox"
      }, {
        "id": 5,
        "title": "多选题3",
        "options": ["选项一", "选项二", "选项三"],
        "necessary": true,
        "type": "checkbox"
      },
      {
        "id": 6,
        "title": "文本框1",
        "necessary": true,
        "type": "textarea"
      }
    ]
  }

];
