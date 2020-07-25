/*
 * @Author: your name
 * @Date: 2020-07-06 16:34:12
 * @LastEditTime: 2020-07-11 18:04:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RongYuan\js\maina.js
 */ 
var myChart = echarts.init(document.getElementById('maina'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '技能雷达图'
            },
            tooltip: {},
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator: [
                    { name: '静态页面', max: 100},
                    { name: '编程基础', max: 100},
                    { name: '运维基础', max: 100},
                    { name: 'python基础', max: 100},
                    { name: '项目开发能力', max: 100}
                ]
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: [85, 70, 80, 60, 75],
                        name: '能力雷达'
                    },
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
