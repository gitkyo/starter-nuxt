<template>
  <div>
    <Countdown deadline="August 22, 2022"></Countdown>
  </div>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  components: { Countdown },
  props : ["stop"]
}
</script>