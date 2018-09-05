1.yarn install//初始化
2.yarn start//启动
3.tarn build//打包
<table border="1px">
    <tr>
            <th>
                <td>参数</td>
                <td>类型</td>
                <td>是否必选</td>
                <td>默认值</td>
                <td>说明</td>
            </th>
    </tr>
    <tr>
            <th>
                <td>columns</td>
                <td>Array</td>
                <td>是</td>
                <td>无</td>
                <td>表头</td>
            </th>
    </tr>
    <tr>
        <th>
            <td>data</td>
            <td>Array</td>
            <td>否</td>
            <td>[]</td>
            <td>数据源 在设置了api后无效</td>
        </th>
    </tr>
    <tr>
        <th>
            <td>api</td>
            <td>String</td>
            <td>否</td>
            <td>null</td>
            <td>远程数据接口</td>
        </th>
    </tr>
    <tr>
        <th>
            <td>params</td>
            <td>Object</td>
            <td>否</td>
            <td>{}</td>
            <td>远程数据参数</td>
        </th>
    </tr>
    <tr>
        <th>
            <td>pageSize</td>
            <td>Number</td>
            <td>否</td>
            <td>10</td>
            <td>表格每页数据</td>
        </th>
    </tr>
    <tr>
        <th>
            <td>canSelectedRow</td>
            <td>Function</td>
            <td>否</td>
            <td>true</td>
            <td>多选模式下某行是否可选中,返回true代表可选中 false代表不可选中</td>
        </th>
    </tr>
</table>