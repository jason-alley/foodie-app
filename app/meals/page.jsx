import Link from 'next/link'

export default function MealsPage() {
    return (
        <div>
            <h1>Meals</h1>
            <p>Here you can see all the meals</p>
            <p>
                <Link href="/meals/share">Share meals</Link>
            </p>
        </div>
    )
}