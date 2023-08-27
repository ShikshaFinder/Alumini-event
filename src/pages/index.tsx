import Navbar from "@/lib/components/Navabar";
import Meeting from "@/lib/components/Meeting";
import LearnMore from "@/lib/components/learnMore";
import Organise from "@/lib/components/Organiseanevent";
import CreateWebinare from "@/lib/components/createwebinar";


// import Organise from "@/lib/components/organise";

function index() {
  return (
    <>
      <Navbar />
      <Meeting />
      <LearnMore />
      <Organise/>
<CreateWebinare/>
    </>
  );
}

export default index;
