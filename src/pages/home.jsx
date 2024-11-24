function Home () {

    const handleEvent = () => {
        console.log('Button clicked!');
    }

    return (
    <div> 
        <button className="home-btn" onClick={handleEvent}>Click here</button>
    </div>
    );
}
export default Home;