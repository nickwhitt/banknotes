import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors, PointElement, LineElement, RadialLinearScale, ArcElement } from 'chart.js'
export default defineNuxtPlugin(() => {
    Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Colors, PointElement, LineElement, RadialLinearScale, ArcElement)
})
