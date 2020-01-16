<template>
    <g-link
        :to="tag.path"
        class="tag">
        {{ tag.title }}
    </g-link>
</template>

<script>
export default {
    props: {
        tag: Object
    }
}
</script>

<style lang="scss" scoped>
.tag {
  background: #eee;
  border-radius: 3px 0 0 3px;
  color: #ff3f34;
  display: inline-flex !important;
  height: 32px;
  line-height: 32px;
  padding: 0 30px 0 10px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
  font-size: 14px;
  font-weight: 700;
}

.tag::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: '';
  height: 8px;
  right: 14px;
  position: absolute;
  width: 8px;
  top: 12px;
}

.tag::after {
  background: #fff;
  border-bottom: 16px solid transparent;
  border-left: 14px solid #eee;
  border-top: 16px solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}

.tag:hover {
  background-color: #ff3f34;
  color: white;
}

.tag:hover::after {
   border-left-color: #ff3f34; 
}
</style>