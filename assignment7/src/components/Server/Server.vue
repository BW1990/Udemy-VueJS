<template>

          <li
            class="list-group-item"
            style="cursor: pointer"
            @click="serverSeleted"
          >
              Server #{{ server.id }}
          </li>
      </ul>
  </div>
</template>

<script>
  import { serverBus } from "../../main"
  
  export default {
    props: ["server"],
    methods: {
      serverSeleted() {
        serverBus.$emit("serverSelected", this.server);
      }
    }
  }
</script>
<style>

</style>
