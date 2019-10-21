<!--more-->
##### 记录一下手动搭建apache + php环境的大致流程（闲得慌系列）

###### 1. 下载windows版apache启动器
 - [下载windows版apache启动器传送门](https://www.apachehaus.com/cgi-bin/download.plx)
 - 选择`64`位或者`32`位的启动器下载即可
 - ![](https://yyccyy.com/wp-content/uploads/2019/08/apache1.png)

###### 2. 下载windows版php
 - [下载windows版php传送门](https://windows.php.net/download)
 - 由于我们使用apache作为服务器，这里需要选择线程安全的php进行下载
 - 选择`64`位或者`32`位的线程安全版本下载即可
 - ![](https://yyccyy.com/wp-content/uploads/2019/08/apache2.png)
 
###### 3. 配置apache
 - 将下载的好的apache进行解压. 目录根据喜好放置，`目录最好不要带有中文`
 - 修改 `conf/httpd.conf` 配置文件
 - 文件查找 `Define SRVROOT` ，修改为`apache目录地址`
 
```shell
Define SRVROOT "C:/Develop/Environment/PHP/Apache_PHP_One/Apache24"
```

 - 文件查找 `DocumentRoot`，修改为 `项目存放的目录地址` 也就是www目录
 
```shell
DocumentRoot "C:/Develop/Environment/PHP/Apache_PHP_One/www"
```

 - 文件查找 `<Directory />` ，修改目录权限，不然会403
 
```shell
<Directory />
    Options Indexes FollowSymLinks
	AllowOverride All
	Require all granted
</Directory>
```

 - 文件查找 DirectoryIndex，修改文件解析`优先级`
 
```shell
DirectoryIndex index.php index.html
```

 - 添加如下3条配置，添加位置随意
 
```shell
1. 配置 php7apache2_4.dll 文件的绝对路径, 此文件在php根目录下
LoadModule php7_module "C:/Develop/Environment/PHP/Apache_PHP_One/PHP7/php7apache2_4.dll"

2. 配置php目录位置
PHPIniDir "C:/Develop/Environment/PHP/Apache_PHP_One/PHP7"

3. 配置文件解析，将.php .html后缀的文件交给php去处理
AddHandler application/x-httpd-php .php .html
```

###### 4. 配置php
 - 将下载的好的php进行解压. 目录根据喜好放置，`目录最好不要带有中文`
 - 复制 `php.ini-development` 文件, 改为文件名称为 `php.ini`
 - 修改 `php.ini` 配置文件
 - 文件查找 extension_dir，修改php扩展目录
 
```shell
extension_dir = "C:/Develop/Environment/PHP/Apache_PHP_One/PHP7/ext"
```

 - 开启扩展，搜索以下配置，将前面的分号删掉，这一步根据自己情况来开启


```shell
extension=bz2
extension=gd2
extension=mbstring
extension=mysqli
extension=pdo_mysql
```

 - 文件查找 upload_tmp_dir，修改临时上传目录
 - 注意目录需要自己手动创建
 
```shell
upload_tmp_dir = "C:/Develop/Environment/PHP/Apache_PHP_One/PHP7/php_upload_tmp"
```

 - 文件查找 session.save_path，修改session数据存放目录
 - 注意目录需要自己手动创建
 
```shell
session.save_path = "C:/Develop/Environment/PHP/Apache_PHP_One/PHP7/php_session_tmp"
```

 - 文件查找 date.timezone，修改默认时区
 
```shell
date.timezone = Asia/Shanghai
```

###### 5. 安装 apache 服务
 - 打开命令行窗口进行操作

```shell
进入apache的bin目录
cd Apache24/bin

安装 apache 服务
httpd.exe -k install -n "apache"
```

###### 6. 测试
 - 启动 apache 服务器
 
```shell
net start apache
```
 
 - 浏览器访问http://127.0.0.0
 
##### apache 多端口虚拟目录映射配置

- 修改 `conf/httpd.conf`，以下为参考配置

```shell
# 监听80端口
Listen 80
# 配置虚拟端口
<VirtualHost *:80>
    ServerName localhost
	# 端口映射的目录
    DocumentRoot "D:/Develop/Environment/PHP/Apache_PHP_One/WWW"
	# 映射目录的权限
	<Directory "D:/Develop/Environment/PHP/Apache_PHP_One/WWW">
		Options Indexes FollowSymLinks
		AllowOverride All
		Require all granted
	</Directory>
</VirtualHost>

Listen 2333
<VirtualHost *:2333>
    ServerName localhost
    DocumentRoot "D:/Develop/Environment/PHP/Apache_PHP_One/WWW"
	<Directory "D:/Develop/Environment/PHP/Apache_PHP_One/WWW">
		Options Indexes FollowSymLinks
		AllowOverride All
		Require all granted
	</Directory>
</VirtualHost>

Listen 9999
<VirtualHost *:9999>
    ServerName localhost
    DocumentRoot "D:\Develop\Environment\PHP\Apache_PHP_One\WWW\student\public"
	<Directory "D:\Develop\Environment\PHP\Apache_PHP_One\WWW\student\public">
		Options Indexes FollowSymLinks
		AllowOverride All
		Require all granted
	</Directory>
</VirtualHost>
```
