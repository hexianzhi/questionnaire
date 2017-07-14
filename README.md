
 
### 设计图
![设计图](http://7xrp04.com1.z0.glb.clouddn.com/task_4_50_1.png)

### 需求分析
 	 以页面为划分
	1. 问卷管理列表，表格--展示所有已创建问卷
		a. 问卷状态未发布时：可进行的操作为 编辑、删除、查看问卷
		b. 发布中和已结束时，可进行的操作为 查看数据、查看问卷
		c. 表格最左侧有批量选择的chekbox：多选后，可以进行批量删除
		d. 一个问卷度没有时，显示创建问卷
	2. 查看问卷
		a. 可供用户填写
		b. 提交时候检测是否有未填项、如果问卷处于未发布或已结束则提示原因。否则提示填写成功。
		c. 移动端兼容
	3. 编辑问卷
		a. 编辑标题
		b. 题型：单选，多选，文本
		c. 创建问题：
			i. 单选：默认一个标题栏，一个选项，点击“添加选项”按钮添加选项。 
			ii. 多选：默认一个标题栏，三个选项，点击“添加选项”按钮添加选项。
			iii. 选项：
				1)  旁边有“删除”按钮
				2) 有必填和非填选项。      默认必填。
				3) 有上移（下移）操作。  第一个选项没有上移，最后一个选项没有下移。
			iv. 文本：有必填和非填选项。     默认必填。
			
		d. 问题改变：
			i. 位置改变：上移、下移。         第一个问题没有上移，最后一个没有下移。
			
			ii. 内容：
				1) 复用： 在问题下方新增一个一模一样的。
				2) 修改：弹出 “创建问题”时的框框，数据跟修改的选项一样。
				3) 删除：
					a)  下方数据上移 
					b)   问题序号改变
		○ 截止日期：用一个日历组件来进行时间的选择。      日期选择不能早于当前日期。（直接在日历组件中设置当前日期之前不可选）
		e. 发布问卷：
			i. 将数据保存至localstorage
			ii. 退回主页面并刷新
		
			
	4. 查看数据
		a. 数据先模拟。 TODO：真实创造一个服务端的环境和代码。
		b. 单选用饼状图
		c. 多选用条形图
		d. 文本框百分比显示有效回答占比

### 总结
	1. 首先是四个页面，每个页面各自为战。。
	2. 复用组件方面：  单选题和多选题选项的新增 和 修改 时候是一个组件。
	3. 复用逻辑：问题的移动和选项的移动，还有删除。    
	4. 数据通信：
		a. 页面之间无数据通信，其中编辑完问卷后存储在localStorage 中，读取就行。 
		b. 组件通信：在编辑问卷页面，新增选项得传选项的数据，修改选项也得传修改的数据，涉及到父子足间通信
	5. 路由方面：多少页面多少路由呗。
	6. 第三方组件：日历组件，不知道能不能禁止特定日期的选择。

### 技术选型：vue、vue-cli、vue-router、scss
