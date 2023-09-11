import { ref, computed, isRef, isReactive, reactive } from "vue"
//isRef 可以被用來確認變數是否是ref產生的，同理isReactive 也是同等道理

export const useNumber = () => {

    const account = reactive({
        saving: 3432,
    })



    let num = ref(0);

    console.log(isReactive(account));
    console.log(isRef(num));

    function increment() {
        num.value++;
    }

    const double = computed(() => {
        return num.value * 2;
    });

    return {
        num, increment, double
    }

}