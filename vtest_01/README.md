<!-- 获取所有用户信息 -->
http://localhost:3000/users
<!-- 获取id为1的用户信息 -->
http://localhost:3000/users/1
<!-- 获取公司的所有信息 -->
http://localhost:3000/companies
<!-- 获取id为1的公司信息 -->
http://localhost:3000/companies/1
<!-- 获取id为1的公司员工的信息 -->
http://localhost:3000/companies/1/users
<!-- 根据公司名字获取信息 -->
http://localhost:3000/companies?name=Beer
http://localhost:3000/companies?name=Beer&name=Care

<!-- 根据页数限制数据 -->
http://localhost:3000/companies?_page=1&_limit=2

<!-- 升序排序 asc升序，desc降序-->
http://localhost:3000/companies?_sort=name&_order=asc

<!-- 获取年龄30及以上的 -->
http://localhost:3000/users?age_gte=30

<!-- 30-40岁的 -->
http://localhost:3000/users?age_gte=30&age_lte=40

<!-- 搜索用户信息 -->
http://localhost:3000/users?q=