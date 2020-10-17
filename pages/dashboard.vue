<template>
    <div>
        <p class="head">dashboard</p>
        <priceCard />
    </div>
</template>

<script>
import priceCard from "@/components/priceCard"
export default {
    name: "dashboard",
    components: { priceCard }
}
</script>