# Bert-VITS2
# 启动容器
docker run --name vits --shm-size=12g -it -d -p 3389:7860 --gpus all initialencounter/bert-vits:latest-lite

# 启动webui
登录ssh
输入命令

```shell
cd workspace/app
python3 manager210.py -p 7860
```

# 创建实验文件夹和加载全局配置

## 输入实验名称
![Alt text](../assets/bert-vits2/image.png)

## 上传待训练的音频数据到

`/app/Data/实验名/custom_character_voice`
音频按说话人单独放在一个文件夹

演示以/app/peila这个音频为例

## 加载全局配置
![Alt text](../assets/bert-vits2/image-1.png)

# 音频数据标注
![Alt text](../assets/bert-vits2/image-2.png)
命令行输出
![Alt text](../assets/bert-vits2/image-4.png)
ds
# 文本预处理
![Alt text](../assets/bert-vits2/image-3.png)
命令行输出
![Alt text](../assets/bert-vits2/image-5.png)

# 生成bert文件
![Alt text](../assets/bert-vits2/image-6.png)
命令行输出
![Alt text](../assets/bert-vits2/image-7.png)

# 生成emo文件
![Alt text](../assets/bert-vits2/image-8.png)
命令行输出
![Alt text](../assets/bert-vits2/image-9.png)

# 写入配置文件
![Alt text](../assets/bert-vits2/image-10.png)

# 首次训练
![Alt text](../assets/bert-vits2/image-11.png)
命令行输出
![Alt text](../assets/bert-vits2/image-12.png)

# 启动tensorboard
![Alt text](../assets/bert-vits2/image-14.png)
命令行输出
![Alt text](../assets/bert-vits2/image-13.png)

# 启动推理
![Alt text](../assets/bert-vits2/image-15.png)
命令行输出
![Alt text](../assets/bert-vits2/image-16.png)

