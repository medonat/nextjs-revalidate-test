export default async function Page() {

    console.log('I AM A CAT');

    const { fact } = await fetch(`https://catfact.ninja/fact`).then((res) => {

        return res.json()
    });

    console.log(fact);

    return (
        <>
            <h1>Cat Test</h1>
            <p dangerouslySetInnerHTML={{ __html: fact }}></p>
        </>
    );
}



