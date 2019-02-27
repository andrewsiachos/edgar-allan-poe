alert("Click on Poe's image to view the poem. Enjoy!!");
$("#audio")[0].play();
$("#poster").delay(500).fadeIn();

$("#poster").on("click", function(){
    $(this).fadeOut();
    $("#menu").css("display","flex");
    $("#info").delay(500).fadeIn(400);
    $("#container").delay(1500).fadeIn(600);
});



$("#stopButton").on("click", function(){
    $("#audio")[0].pause();
});

$("#languages").on("mouseenter", function(){
    $("#langList").fadeIn("fast");
});

$("#languages").on("mouseleave", function(){
    $("#langList").hide();
});


$("#english").on("click", function(){
    

    if($(this).attr("class")!="active"){
        $("#title").hide();
        $("#title").css("font-family","medieval");
        $("#title").css("font-size","45px");
        $("#title").html("The Raven").fadeIn(200);

        $("#text").hide();
        $("#text").css("font-family","Alice");
        $("#text").css("font-size","25px");
        $("#text").html(ravenEnglish).fadeIn(200);
        $("#greek").removeClass("active");
        $(this).addClass("active");
    }
});

$("#greek").on("click", function(){
    if($(this).attr("class")!="active"){
        $("#title").hide();
        $("#title").css("font-family","arial");
        $("#title").css("font-size","35px");
        $("#title").html("Το Κοράκι").fadeIn(200);

        $("#text").hide();
        $("#text").css("font-family","arial");
        $("#text").css("font-size","20px");
        $("#text").html(ravenGreek).fadeIn(200);
        $("#english").removeClass("active");
        $(this).addClass("active");
    }
        

    
});
var ravenEnglish = "Once upon a midnight dreary, while I pondered, weak and weary,<br>Over many a quaint and curious volume of forgotten lore—<br>While I nodded, nearly napping, suddenly there came a tapping,<br>As of some one gently rapping, rapping at my chamber door.<br>“’Tis some visitor,” I muttered, “tapping at my chamber door—<br>Only this and nothing more.”<br>~<br>Ah, distinctly I remember it was in the bleak December;<br>And each separate dying ember wrought its ghost upon the floor.<br>Eagerly I wished the morrow;—vainly I had sought to borrow<br>From my books surcease of sorrow—sorrow for the lost Lenore—<br>For the rare and radiant maiden whom the angels name Lenore—<br>Nameless here for evermore.<br>~<br>And the silken, sad, uncertain rustling of each purple curtain<br>Thrilled me—filled me with fantastic terrors never felt before;<br>So that now, to still the beating of my heart, I stood repeating<br>“’Tis some visitor entreating entrance at my chamber door—<br>Some late visitor entreating entrance at my chamber door;—<br>This it is and nothing more.”<br>~<br>Presently my soul grew stronger; hesitating then no longer,<br>“Sir,” said I, “or Madam, truly your forgiveness I implore;<br>But the fact is I was napping, and so gently you came rapping,<br>And so faintly you came tapping, tapping at my chamber door,<br>That I scarce was sure I heard you”—here I opened wide the door;—<br>Darkness there and nothing more.<br>~<br>Deep into that darkness peering, long I stood there wondering, fearing,<br>Doubting, dreaming dreams no mortal ever dared to dream before;<br>But the silence was unbroken, and the stillness gave no token,<br>And the only word there spoken was the whispered word, “Lenore?”<br>This I whispered, and an echo murmured back the word, “Lenore!”—<br>Merely this and nothing more.<br>~<br>Back into the chamber turning, all my soul within me burning,<br>Soon again I heard a tapping somewhat louder than before.<br>“Surely,” said I, “surely that is something at my window lattice;<br>Let me see, then, what thereat is, and this mystery explore—<br>Let my heart be still a moment and this mystery explore;—<br>’Tis the wind and nothing more!”<br>~<br>Open here I flung the shutter, when, with many a flirt and flutter,<br>In there stepped a stately Raven of the saintly days of yore;<br>Not the least obeisance made he; not a minute stopped or stayed he;<br>But, with mien of lord or lady, perched above my chamber door—<br>Perched upon a bust of Pallas just above my chamber door—<br>Perched, and sat, and nothing more.<br>~<br>Then this ebony bird beguiling my sad fancy into smiling,<br>By the grave and stern decorum of the countenance it wore,<br>“Though thy crest be shorn and shaven, thou,” I said, “art sure no craven,<br>Ghastly grim and ancient Raven wandering from the Nightly shore—<br>Tell me what thy lordly name is on the Night’s Plutonian shore!”<br>Quoth the Raven “Nevermore.”<br>~<br>Much I marvelled this ungainly fowl to hear discourse so plainly,<br>Though its answer little meaning—little relevancy bore;<br>For we cannot help agreeing that no living human being<br>Ever yet was blessed with seeing bird above his chamber door—<br>Bird or beast upon the sculptured bust above his chamber door,<br>With such name as “Nevermore.”<br>~<br>But the Raven, sitting lonely on the placid bust, spoke only<br>That one word, as if his soul in that one word he did outpour.<br>Nothing farther then he uttered—not a feather then he fluttered—<br>Till I scarcely more than muttered “Other friends have flown before—<br>On the morrow he will leave me, as my Hopes have flown before.”<br>Then the bird said “Nevermore.”<br>~<br>Startled at the stillness broken by reply so aptly spoken,<br>“Doubtless,” said I, “what it utters is its only stock and store<br>Caught from some unhappy master whom unmerciful Disaster<br>Followed fast and followed faster till his songs one burden bore—<br>Till the dirges of his Hope that melancholy burden bore<br>Of ‘Never—nevermore’.”<br>~<br>But the Raven still beguiling all my fancy into smiling,<br>Straight I wheeled a cushioned seat in front of bird, and bust and door;<br>Then, upon the velvet sinking, I betook myself to linking<br>Fancy unto fancy, thinking what this ominous bird of yore—<br>What this grim, ungainly, ghastly, gaunt, and ominous bird of yore<br>Meant in croaking “Nevermore.”<br>~<br>This I sat engaged in guessing, but no syllable expressing<br>To the fowl whose fiery eyes now burned into my bosom’s core;<br>This and more I sat divining, with my head at ease reclining<br>On the cushion’s velvet lining that the lamp-light gloated o’er,<br>But whose velvet-violet lining with the lamp-light gloating o’er,<br>She shall press, ah, nevermore!<br>~<br>Then, methought, the air grew denser, perfumed from an unseen censer<br>Swung by Seraphim whose foot-falls tinkled on the tufted floor.<br>“Wretch,” I cried, “thy God hath lent thee—by these angels he hath sent thee<br>Respite—respite and nepenthe from thy memories of Lenore;<br>Quaff, oh quaff this kind nepenthe and forget this lost Lenore!”<br>Quoth the Raven “Nevermore.”<br>~<br>“Prophet!” said I, “thing of evil!—prophet still, if bird or devil!—<br>Whether Tempter sent, or whether tempest tossed thee here ashore,<br>Desolate yet all undaunted, on this desert land enchanted—<br>On this home by Horror haunted—tell me truly, I implore—<br>Is there—is there balm in Gilead?—tell me—tell me, I implore!”<br>Quoth the Raven “Nevermore.”<br>~<br>“Prophet!” said I, “thing of evil!—prophet still, if bird or devil!<br>By that Heaven that bends above us—by that God we both adore—<br>Tell this soul with sorrow laden if, within the distant Aidenn,<br>It shall clasp a sainted maiden whom the angels name Lenore—<br>Clasp a rare and radiant maiden whom the angels name Lenore.”<br>Quoth the Raven “Nevermore.”<br>~<br>“Be that word our sign of parting, bird or fiend!” I shrieked, upstarting—<br>“Get thee back into the tempest and the Night’s Plutonian shore!<br>Leave no black plume as a token of that lie thy soul hath spoken!<br>Leave my loneliness unbroken!—quit the bust above my door!<br>Take thy beak from out my heart, and take thy form from off my door!”<br>Quoth the Raven “Nevermore.”<br>~<br>And the Raven, never flitting, still is sitting, still is sitting<br>On the pallid bust of Pallas just above my chamber door;<br>And his eyes have all the seeming of a demon’s that is dreaming,<br>And the lamp-light o’er him streaming throws his shadow on the floor;<br>And my soul from out that shadow that lies floating on the floor<br>Shall be lifted—nevermore!";
var ravenGreek = "Δώδεκα έδειχνεν η ώρα, μεσονύχτι, όπως και τώρα<br>Κι ήμουν βυθισμένος ώρα σε βιβλία αλλοτινά,<br>όταν μέσα από ένα θάμπος ύπνου να μου εφάνη, σάμπως<br>Κάποιος έξω από την πόρτα να χτυπούσε σιγανά.<br>Επισκέπτης, είπα, θά’ ναι και χτυπάει σιγανά<br>Τούτο θά ‘ναι μοναχά.<br>~<br>Α, θυμάμαι, έπεφτε χιόνι και του κρύου Δεκέμβρη οι τόνοι<br>Σκούζαν μες στο παραγώνι και στοιχειώναν στη φωτιά.<br>Η νυχτιά με στενοχώρα κι άδικα έψαχνα τόση ώρα<br>Νά’ βρω τη γλυκειά Λεωνόρα μες τ’ αρχαία μου χαρτιά.<br>Τη Λεωνόρα που οι αγγέλοι της κρατάνε συντροφιά<br>Και δική μας ποτέ πια.<br>~<br>Κάθε θρόισμα στο μετάξι της κουρτίνας είχε αλλάξει<br>Κι έρχονταν να με ταράξει ο άγριος φόβος που τρυπά .<br>Κι έλεγα , για να πάρω θάρρος και να διώξω αυτό το βάρος :<br>- Επισκέπτης , δίχως άλλο , θάναι τούτος που χτυπά ,<br>Κάποιος νυχτοπαρωρίτης , που για νάμπει μου χτυπά<br>Τούτο θάναι μοναχά.<br>~<br>Ξάφνου ως νάντριωσε η ψυχή μου και παρά την ταραχή μου<br>- Κύριε , φώναξα , ή κυρία , συγχωρέστε με , έστω αργά<br>Στα χαρτιά μου ήμουν σκυμένος κι ίσως μισοκοιμισμένος<br>Δε σας άκουσα ωρισμένως να χτυπάτε έτσι σιγά .<br>Με τα λόγια τούτα ανοίγω τα πορτόφυλλα γοργά .<br>΄Εξω η νύχτα μοναχά.<br>~<br>Το σκοτάδι αυτό τρυπώντας έμεινα εκειδά απορώντας<br>Κάθε τόσο ανασκιρτώντας μέσα σ’ όνειρα αλγεινά .<br>Κράτησε ησυχία για ώρα κι άξαφνα απ’ τα βάθη τώρα,<br>Μια φωνή να λέει Λεωνόρα σα ν’ ακούστηκε βραχνά .<br>Εγώ φώναξα «Λεωνόρα» και τη φέρνει η ηχώ ξανά,<br>΄Ετσι θάναι μοναχά.<br>~<br>Μπήκα στο δωμάτιο πάλι , μ’ άνω κάτω το κεφάλι ,<br>Μα μέσα απ’ αυτή τη ζάλη , δυνατήν ακούω χτυπιά .<br>- Α , στο παραθύρι θάναι, λέω ευθύς, και με ζητάνε ,<br>Ας ιδώ τώρα ποιος νάναι, φτάνει το μυστήριο πια,<br>Η καρδια μου δεν αντέχει, φτάνει το μυστήριο πια<br>Θάναι ο αγέρας μοναχά.<br>~<br>Τότε τα παντζούρια ανοίγω , όμως μια κραυγή μου πνίγω<br>Καθώς βλέπω ένα κοράκι μες στο δώμα να περνά .<br>Η ευγένεια δεν το νοιάζει κι ούτε που με λογαριάζει ,<br>Μα γαντζώνει στο περβάζι της εσώπορτας στερνά .<br>Μα γαντζώνει και κουρνιάζει στη μαρμάρινη Αθηνά<br>Και κυττάζει μοναχά.<br>~<br>Πως ανάπνευσα στ’ αλήθεια και γελώντας απ’ τα στήθεια ,<br>Λέω , από παλιά συνήθεια , στ’ όρνιο με τη κρύα ματιά :<br>- Κι αν σου κόψαν το λοφίο κι αν σ’ αφήκαν έτσι αστείο<br>Μαυροπούλι άλλοτε θείο , που πλανιέσαι στη νυχτιά,<br>ποιό είναι τάχα τ’ όνομά σου μες την άραχνη νυχτιά;<br>Και μου λέει : – Ποτέ πια !<br>~<br>Θάμασα πολύ μου ακόμα τόρνιο , που είχε ανθρώπου στόμα ,<br>Μα τα λόγια του όλο σκώμα δε μου μάθανε πολλά .<br>Γιατί αλήθεια , είναι σπουδαίο και περίεργο και μοιραίο ,<br>Αν μια νύχτα , σας το λέω , δείτε κάπου εκεί ψηλά<br>Κουρνιασμένο ένα κοράκι στην Παλλάδα, να μιλά<br>Και να λέει : Ποτέ πιά !<br>~<br>Τ ‘ όνομά του θα μου κράζει , σκέφτηκα , μα τι με νοιάζει ,<br>΄Ισως πάλι να νυστάζει και τα λόγια του ξεχνά .<br>΄Ομως τούτο ούτε σαλεύει κι είναι ως κάτι να γυρεύει<br>Και του κρίνουμαι : – Περσεύει κι άλλος τόπος εδωνά ,<br>Την αυγή θα φύγεις πάλι σαν ελπίδα που περνά .<br>Και μου λέει : Ποτέ πια !<br>~<br>Τρόμαξα στ’ αλήθεια μου , όντας , μου δευτέρωσε μιλώντας ,<br>- Δίχως άλλο , είπα σκιρτώντας , τούτο ξέρει μοναχά .<br>Κάποιος πρώην κύριός του , θάκλαψε πολύ , ο καϋμός του<br>΄Ισως νάγινε δικός του και για τούτο αγκομαχά<br>Και του απόμεινε στη σκέψη κι είναι σα να ξεψυχά<br>Λέγοντάς μου : – Ποτέ πια !<br>~<br>Και τη θλίψη μου ξεχνώντας έστρεψα σ’ αυτό γελώντας<br>Την καρέκλα μου τραβώντας στο κοράκι αντικρυνά .<br>Μα στο κάθισμά μου απάνω , χίλιες τόσες σκέψεις κάνω<br>Και στο νου μου τώρα βάνω για ποιό λόγο αληθινά<br>Σα μιαν επωδή μακάβρια να μου λέει όλο ξανά<br>Το κοράκι : Ποτέ πια !<br>~<br>Γρίφος θάναι ή αίνιγμά του κι ίσως μήνυμα θανάτου<br>Και κυττώντας τη ματιά του που μου τρύπαε την καρδιά ,<br>Γέρνω ωραία μου το κεφάλι , στο δικό της προσκεφάλι ,<br>Όπου αντιφεγγούσε πάλι , σαν και τότε μια βραδυά ,<br>Με το βιολετί βελούδο, σαν και τότε μια βραδυά<br>Και που δε θ’ αγγίξει πια !<br>~<br>Ξάφνου ως νάνοιωσα μου εφάνη γύρω μου άκρατο λιβάνι<br>Και πλημμύρα να μου φτάνει σύννεφο η θεία του καπνιά .<br>- ΄Αθλιε , φώναξα , στοχάσου , που ο Θεός στέλνει κοντά σου .<br>Αγγέλους να σου σταλάσουν νηπενθές για λησμονιά ,<br>Πιέστο , ω , πιέστο , τη Λεωνόρα να ξεχάσεις μ’ απονιά ,<br>Και μου λέει : – Ποτέ πια !<br>~<br>Α , προφήτη , κράζω ,ωιμένα , κι αν του δαίμονα είσαι γέννα<br>Κι αν ο Πειρασμός σε μένα , σ’ έστειλε απ ‘ τη γης βαθειά ,<br>Κι αν σε τόπο ρημαγμένο σ’ έχει ρίξει απελπισμένο<br>Σ ‘ ένα σπίτι στοιχειωμένο με σκιές και με ξωθιά ,<br>Θάβρω στη Γαλαάδ , ω πες μου , θάβρω εκεί παρηγοριά ;<br>Και μου λέει : – Ποτέ πια !<br>~<br>- Α , προφήτη , ανήλιαγο όρνιο κι αν πουλί σαι κι αν δαιμόνιο<br>Απ’ το σκότος σου το αιώνιο κι απ ‘ την κρύα σου συννεφιά.<br>Πες μου , στης Εδέμ τα δάση , θάβρει ο νους μου ν’ αγκαλιάσει<br>Μια παρθένα πούχει αγιάσει κι έχει αγγέλους συντροφιά ,<br>Μιαν ολόλαμπρη παρθένα , πούχει αγγέλους συντροφιά ;<br>Και μου λέει : Ποτέ πιά !<br>~<br>Φύγε στ’ άγριά τα σου μέρη , όρνιο ή φάντασμα , ποιος ξέρει<br>Αν αυτό που σ’ έχει φέρει δεν σε καταπιεί ξανά .<br>Κι ούτε ένα μικρό φτερό σου να μη μείνει εδώ δικό σου ,<br>Φώναξα , και το φευγιό σου να χαθεί στα σκοτεινά .<br>Πάρε και το κρώξιμό σου πέρα από την Αθηνά .<br>Και μου λέει : – Ποτέ πια !<br>~<br>Κι από τότε εκεί δεμένο , το κοράκι , καθισμένο<br>Μένει πάντα κουρνιασμένο στη μαρμάρινη θεά .<br>Κι η ματιά του όπως κυττάζει , με ματιά δαιμόνιου μοιάζει<br>Κι η νυχτιά που το σκεπάζει του στοιχειώνει τη σκιά .<br>Α , η ψυχή μου , δε θα φύγει μια στιγμή απ’ αυτή τη σκιά .<br>Δε θα φύγει ποτέ πια !";
