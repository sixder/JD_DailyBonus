# 基于GitHub Action的京东签到

感谢[NobyDa](https://github.com/NobyDa)的签到脚本

本项目通过自动下载并替换cookie，以保证不需要关心脚本的更新情况

使用：

* fork或者下载并上传至自己的GitHub账号中
* 在自己的仓库中的Settings->Secrets中，新建一个secrets，并命名为COOKIE

运行时间默认为凌晨1点，需要修改时间可修改，.github/workflows/main.yml中的cron