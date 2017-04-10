## react初始化工具

### 使用

#### 安装：

```bash
npm install wxrc -g
```

#### 创建一个初始化的react工程

使用命令：

```bash
mkdir peojectname & cd peojectname
wxrc init
```

初始化的react工程包括以下这些功能：

- [x] 使用webpack2.0 
- [x] 集成webpack chunk
- [x] 集成eslint
- [x] 集成hot-reload
- [x] 集成css Autoprefixer前缀自动补全 
- [x] 集成sass
- [x] 集成css-modules
- [x] 集成sprite自动生成和编译成样式
- [x] 集成imagemin图片压缩
- [x] 集成source-map
- [x] 集成rem   
- [x] 集成单元测试

#### 在当前目录下新建一个初始化的react工程

使用命令：

```bash
wxrc new peojectname
```

创建出来的工程包括的功能和init出来的一样。

#### 使用react-redux和react-router创建一个初始化工程(待完善)

使用命令：

初始化：
```bash
wxrc new peojectname -R
```

新建：
```bash
wxrc new peojectname -R
```