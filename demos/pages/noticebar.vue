<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">NoticeBar</fe-header>
    <div class="fe-content">
      <divider>加个小喇叭</divider> 
      <fe-noticebar
        text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力" 
        leftIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABC1JREFUWAnlV11sVEUUPufeWyxQRV6EBKx/1EQx3d3+hJ9I4AFisA8SioC8mOCDBJUE2t2iD2RfqmzZ+mAI6hPESCQxSIgx+KJiJCKFut0aQkSjpPHvwbT8FGjt3nv8zlzupvvT7kK4T0yzc2a+OXPON2dm7pwS3euF7yQA0hVZTC4dIZIhTg+23YmNYI4TNKqVEm9sp5wcgn4dfs9UO28qvaoJSHKVQ6OX3yHP64QxIeYrJDJnKsOKSzz6GsQcam1I8cZP3XK6VjmwGJOu5nq6NvItCZwzjRDZbaDwQ7FeSV/kJRDupr6fv5K3lswrGQdQkYB0RreQOzGA9Swn4j5yrCbuzZwoZ6wEs502ED4OsitpfCxjzk6REktHbC1ZEjM4AlswLrISjtcA9Ui4h5509vCr/ROqIx2RL1E/x72DhXMKDEBDhCkeTaCxFwu4SPfXtnLyzNVAzSF2P4P52gAolZxBnLZxT7avdKw8Iu+tvY93nBjXUWYWiJR0Rh4CiV00OnYQ/XYd02IhPLVY4RBZ9hayrI0FP4dXUHqg+bacd0R20tCflxGhbb6LW3Xd3C74+Q4k1mNbXwjG/FsgfIHTmU8CsECmpo1wgarpMCIm9B+C/z5IPMK92TcV5+TJnHTF3qCci/PkvQ7ouOIVD6Eq3U7h9MBJqrGbTVRJdksiui6Yz6lMFlROgeBqSTQ9pfhdJ6BGee+Pv2JL283h9aRbsXyx+QPT9rxNKkMhoIa5J3MO4nPs+dO4fs8qZgoLtkCL16p1aATUOMx/YUSOG43Uat6s31AL/h7WbrgEhP9QJ9iKhUZqc9fpm+gP434+oFi4BNib7zv2/vEllp58cQbacxGBUcXCJUC8Sp3g23LBSK3GLz4K5xax/K3d0AhIZ+NjOGibzXVsafhanZkyQYv9BverDIWAJKMP4u04hpUi3Px2wVMstNUnIMdCISDx5iYa1asmETg/zOnsh75DILtbH0fon8cBPItM6ozi/qeYZZEkYi3kuWOBspE2HhJXLkH5egE+XUcmXsHK68niXlrkmM9wXj03njL7b8n+AAMBdvGxeIJc92wA5mVOHzK+isymm2avS3My6eXHpmrU1cTpZu4Ap7LnJ6vgXdgJPxtg73sQy787yAei23FQlkxWzrfFq8EEfMtlJuQpsq1N+ML9pePV5gO+bmwDsadOh3EjYoENHav41GH1DUjFjiB0TdDGfbbX4+U8XQ0BP48cQdiRBzDfgLs281ip51ul4i3gfQO/UP2C5cTWRyAxn8T9xqRpgYXp5LXho8a5ZkK2s7TYuU6tSECVNLvB5JdBIoHuDETkMOQyHatQfsfKD5Jd18Kp/p/K6VbcguJJ5v8CoY8RDZPGVcoJi+cX96uKwORJvG/wKNm8BnH5F3jZVU3WD60t7y6bqb/QHNwzhv8HaA1y7qSeDg0AAAAASUVORK5CYII="
      ></fe-noticebar>
      <br>
      <divider>不能动了</divider> 
      <fe-noticebar :scrollable="false" text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力" ></fe-noticebar>
      <br>
      <divider>有图标能关闭</divider> 
      <fe-noticebar mode="closeable" text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力" ></fe-noticebar>
      <br/>
      <divider>有图标不能关闭</divider> 
      <fe-noticebar mode="link" text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力" ></fe-noticebar> 
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      
    }
  }
</script>
<style scoped lang="less">
  
</style>
