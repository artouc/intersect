const onIntersect = (entries, observer, el, binding) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            binding.value(entry, el)
        }
    }
}

const intersectDirective = {
    beforeMount(el, binding) {
        const options = {
            root: binding.arg ? document.querySelector(binding.arg) : null,
            rootMargin: '0px',
            threshold: 0.01
        }

        el._vueIntersectObserver = new IntersectionObserver((entries, observer) => onIntersect(entries, observer, el, binding), options)
        el._vueIntersectObserver.observe(el)
    },
    unmounted(el) {
        if (el._vueIntersectObserver) {
            el._vueIntersectObserver.disconnect()
            delete el._vueIntersectObserver
        }
    }
}

export default {
    install(app) {
        app.directive('intersect', intersectDirective)
    }
}
