# TodoApp

```bash
$ git clone https://github.com/kukiat/todo-app-reactnative.git
$ cd todo-app-reactnative
$ npm install
```
# installation
  - ติดตั้ง NodeJS
  - ติดตั้ง watchman
# For ios
  - ติดตั้ง Xcode last version
```bash

$ npm start
$ react-native run-ios
```

# For android
  - ติดตั้ง Android Studio
  - ติดตั้ง Android SDK

```bash
$ export ANDROID_HOME=$HOME/Library/Android/sdk 
$ export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
$ source $HOME/.bash_profile
```

  - เปิด Android Studio
  - เปิด Android Emulator

  > 1. เปิด Android Studio หลังจากนั้นกด Start Project แล้วกด Next เรื่อยๆ
  ![Alt text](https://raw.githubusercontent.com/kukiat/todo-app-reactnative/master/screen/home.png)

  > 2. Select Emulator tab
  ![Alt text](https://raw.githubusercontent.com/kukiat/todo-app-reactnative/master/screen/emu.png)

  > 3. Run Emulator
  ![Alt text](https://raw.githubusercontent.com/kukiat/todo-app-reactnative/master/screen/start.png)

  - สร้างไฟล์ local.properties ในโฟลเดอร์โปรเจ็ค

```bash
$ echo sdk.dir = $HOME/Library/Android/sdk > android/local.properties 
```

 ```bash
$ npm start
$ react-native run-android
```