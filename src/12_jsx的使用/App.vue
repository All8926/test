<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    return {
      count
    };
  },
  render() {
    return (
      <div>
        <h2>count: {this.count}</h2>
      </div>
    );
  }
};
</script>

<style scoped></style>
