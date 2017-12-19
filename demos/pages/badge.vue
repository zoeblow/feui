<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Badge</fe-header>
    <div class="fe-content">
      <div>
        <fe-badge></fe-badge>
        <br>
        <fe-badge text="1"></fe-badge>
        <br>
        <fe-badge text="123"></fe-badge>
        <br>
        <fe-group title='表格中使用'>
          <fe-cell title="个位数" is-link>
            <div class="badge-value" slot="value">
              <span class="vertical-middle">红点点 &nbsp;</span>
              <fe-badge></fe-badge>
            </div>
          </fe-cell>
          <fe-cell title="个位数" is-link>
            <div class="badge-value" slot="value">
              <span class="vertical-middle">未读消息 &nbsp;</span>
              <fe-badge text="8"></fe-badge>
            </div>
          </fe-cell>
          <fe-cell title="较大数据" is-link>
            <div class="badge-value" slot="value">
              <span class="vertical-middle">新信息 &nbsp;</span>
              <fe-badge text="888"></fe-badge>
            </div>
          </fe-cell>
        </fe-group>
      </div>
    </div>
  </div>
</template>

<script>

</script>
