export default async function handleWebhook(req, res) {

    console.log('[Next.js] Revalidating /');

    try {

        await res.revalidate('/');

        return res.json({ revalidated: true });
    } catch (err) {

        console.log('error', err);

        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send('Error revalidating');
    }

}
