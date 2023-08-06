<template>
  <i class="w-icon" :style="style">
    <slot></slot>
  </i>
</template>
<script lang="ts">
export default defineComponent({
  name: "MiniIcon",
});
</script>
<script lang="ts" setup>
import { CSSProperties, computed, defineComponent } from "vue";
import { iconProps } from "./icon";
import { isUndefined, addUnit } from "@mini-ui/utils";

const props = defineProps(iconProps);

const style = computed<CSSProperties>(() => {
  const { size, color } = props;
  if (!size && !color) return {};

  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    "color": color,
  };
});
</script>
