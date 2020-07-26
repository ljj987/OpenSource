/*
 * @Author: your name
 * @Date: 2020-07-23 17:26:37
 * @LastEditTime: 2020-07-25 18:22:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \OpenSource\js\maind.js
 */ 
var myChart = echarts.init(document.getElementById('maind'));

        // 指定图表的配置项和数据
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['能力', '百分比']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value'
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    data: ['号召能力', '学习能力', '沟通能力', '工作能力', '观察能力', '适应能力', '创新能力', '领导能力', '联想能力']
                }
            ],
            series: [
                {
                    name: '能力',
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    data: [20, 90, 60, 80, 70, 85, 75, 35, 65]
                },
                
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);