from app import app
from extension import db
from models import Course

def init_db():
    with app.app_context():
        db.create_all()

        # Define the list of courses
        courses_data = [
        {"title": 'Classroom Helper', "style": 'Klett', "thumbnail_url": 'img40.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Klett_Classroom/index.html','description':'An application having various tools to assist teachers in effective handling of classroom'},
        {"title": 'Geometry Tool', "style": 'Klett', "thumbnail_url": 'img25.png', "course_url": 'build8/app.html','description':'Open ended geometry tool'},

        {"title": 'Construct parallelogram', "style": 'Klett', "thumbnail_url": 'img24.png', "course_url": 'build1/app.html','description':'With the required attributes given, step by step construction of parallelogram'},
        {"title": 'Display Quantities ', "style": 'Klett', "thumbnail_url": 'img9.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Klett_Primary_Math/demo_0_display_quantities/index.html','description':'none'},
        
        {"title": 'Projectile Motion', "style": 'Klett', "thumbnail_url": 'img16.png', "course_url": 'build2/app.html','description':'Explore projectile motion though firing a canon'},
        {"title": 'Digestive systems Klett', "style": 'Klett', "thumbnail_url": 'img61.png', "course_url": 'build2/app.html','description':'none'},

        # {"title": 'HMS', "style": 'e-Book Development', "thumbnail_url": 'img1.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/002_hms/','description':'none'},
        {"title": 'Shapes', "style": 'e-Book Development', "thumbnail_url": 'img2.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Encyclopaedia_Britannica/bdl-shapes/','description':'Students discover interesting things about shapes'},
        {"title": 'My Family', "style": 'e-Book Development', "thumbnail_url": 'img3.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Twin_sister/index.html','description':'Bilingual book on My Family for junior grade students'},
        {"title": 'Math book', "style": 'e-Book Development', "thumbnail_url": 'img60.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CA-ePub_Indesign%20(1)/index.html','description':'An HTML5 math ebook with global features like, calculator, search, notes, annotation tool, book marking, etc.'},


        {"title": 'Plant Growth', "style": 'Digital Lesson Development', "thumbnail_url": 'img4.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/conversion/005_sf/','description':'Inquiry based lesson on why do plants grow'},
        {"title": 'Mass and Weight', "style": 'Simulations', "thumbnail_url": 'img17.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/To_Client/Mass_and_Weight/Maintenance/Mass_and_Weight/','description':'Difference between mass and weight and impact of "g" on both'},
        {"title": 'Quiz Game', "style": 'Games', "thumbnail_url": 'img26.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Pepsico%20game%20development/','description':'A fully accessible and responsive game engine developed for quiz'},
        {"title": 'CLE Bonjour', "style": 'Animation & Artwork Development', "thumbnail_url": 'img30.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CLE_U0_L2_Bonjour_v3/index.html','description':'Pre-primary songs in French.'},
        # {"title": 'Sadlier Build a Sentence', "style": 'Language Learning', "thumbnail_url": 'img45.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Build_a_Sentence/','description':'none'},


        {"title": 'Ebook Student Dashboard', "style": 'Technology', "thumbnail_url": 'img42.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/Others/PL_Application_ipad.mp4','description':'Platform for students to consume content and attempt assignments '},
        {"title": 'Ebook Authoring Platform', "style": 'Technology', "thumbnail_url": 'img43.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/Others/PL_Object_Editor_ipad.mp4','description':'Ebook authoring and student assignment management platform'},
        # Digital Lesson Development
        {"title": 'Enter quantities up to 6/10', "style": 'Accessibility', "thumbnail_url": 'img55.png', "course_url": 'https://webhost.mitrmedia.com/ftp/mitr_sims/Accessibility/Klett/Primary_Practice/b1/practice_1_Enter_quantities_up_to_6_10/','description':'none'},
        {"title": 'Writing using evidence from text', "style": 'Professional Education', "thumbnail_url": 'img54.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Writing using evidence from text/ccr2_mod_1/index.html','description':'Teaching writing using evidence from text'},



        {"title": 'Plant Growth', "style": 'Digital Lesson Development', "thumbnail_url": 'img4.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/conversion/005_sf/','description':'Inquiry based lesson on why do plants grow'},
        # {"title": 'LSAT', "style": 'Digital Lesson Development', "thumbnail_url": 'img6.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Barrons/LSAT/','description':'none'},
        {"title": 'Science Book', "style": 'Digital Lesson Development', "thumbnail_url": 'img7.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/teacher/002_tt_002_sub/','description':'Digital Science book for teacher training'},
        # {"title": 'Add Using Arrays', "style": 'Digital Lesson Development', "thumbnail_url": 'img8.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/pheonix-project/arrays/','description':'none'},
        {"title": 'Reading Comprehension', "style": 'Digital Lesson Development', "thumbnail_url": 'img10.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/pheonix-project/ask_ans/','description':'Ask and answer questions on informational text'},
        {"title": 'Math Interactivity', "style": 'Digital Lesson Development', "thumbnail_url": 'img11.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Math_Interactivity_v04/Math_interactivity_04/index.html','description':'none'},
        {"title": 'Types of matter', "style": 'Digital Lesson Development', "thumbnail_url": 'img12.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Sci_Interactivity_v03/Sci_interactivity_v03/index.html','description':'Identifying solid, liquid and gas for grade k-2'},
        {"title": 'Enter quantities up to 6/10', "style": 'Digital Lesson Development', "thumbnail_url": 'img55.png', "course_url": 'https://webhost.mitrmedia.com/ftp/mitr_sims/Accessibility/Klett/Primary_Practice/b1/practice_1_Enter_quantities_up_to_6_10/','description':'none'},

        # Simulations
        {"title": 'Eclipse', "style": 'Simulations', "thumbnail_url": 'img13.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/To_Client/Solar_Eclipse_and_Lunar_Eclipse/Gold3/Solar_Eclipse_and_Lunar_Eclipse/','description':'A simulation to explore solar and lunar eclipse.'},
        # {"title": 'Construct equilateral polygons (polygons)', "style": 'Simulations', "thumbnail_url": 'img56.png', "course_url": 'build9/app.html','description':'none'},
        {"title": 'Measuring Volume', "style": 'Simulations', "thumbnail_url": 'img20.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/To_Client/Measuring_Volume/Maintenance/Measuring_Volume/','description':'Measure volume of objects of regular and irregular shapes by displacement of liquid'},
        {"title": 'Trophic level and ecological pyramides', "style": 'Simulations', "thumbnail_url": 'img21.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/To_Client/Trophic_Levels/Gold2/Trophic_Levels/','description':'Observe the utilisation of energy at each trophic level'},
        {"title": 'Digestive systems', "style": 'Simulations', "thumbnail_url": 'img23.png', "course_url": 'https://webhost.mitrmedia.com/ftp/el_gettersetter/demo/?1050','description':'none'},

        # Games
        # {"title": 'Beer Game', "style": 'Games', "thumbnail_url": 'img27.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Beer_Game/index.html','description':'none'},
        {"title": 'Word game', "style": 'Games', "thumbnail_url": 'img28.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Sadlier/Sadlier_VWBasketball/R1/index.html','description':'A game designed to read the clue and guess the word by selecting appropriate letters'},
        {"title": 'Multiplication sentence', "style": 'Games', "thumbnail_url": 'img29.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Math_Game_v03/Math_game_v03/index.html','description':'Concept of multiplication explained through grouping'},
        {"title": 'Word game', "style": 'Games', "thumbnail_url": 'img57.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Sadlier/Crossword/Responsive_Beta/R3/index.html','description':'Crossword game engine for students to identify the words based on clues'},

        # Animation & Artwork Development
        {"title": 'CLE Bonjour', "style": 'Animation & Artwork Development', "thumbnail_url": 'img30.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CLE_U0_L2_Bonjour_v3/index.html','description':'Pre-primary songs in French.'},
        # {"title": 'CLE U6 L2', "style": 'Animation & Artwork Development', "thumbnail_url": 'img31.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CLE_U6_L2_QUEL_TEMPS_v3_Low%20Res/index.html','description':'none'},
        # {"title": 'CLE U3 L2', "style": 'Animation & Artwork Development', "thumbnail_url": 'img32.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CLE_U3_L2_Grr_v3/index.html','description':'none'},
        {"title": 'English Words', "style": 'Animation & Artwork Development', "thumbnail_url": 'img33.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Animation/1%20G6_P2_U5_L1_learning_1/','description':'Usage and meaning of English words in real life scenario.'},
        {"title": 'Multiplication', "style": 'Animation & Artwork Development', "thumbnail_url": 'img34.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Learn_Primary/Multiplication%20Y5L5/index.html','description':'Multiplication concept for primary grade.'},
        # {"title": 'Pygmalion Effect', "style": 'Animation & Artwork Development', "thumbnail_url": 'img35.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/corporate/pygmalion_23_07_2018_edited/','description':'none'},
        {"title": 'Neurons', "style": 'Animation & Artwork Development', "thumbnail_url": 'img36.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Animation/HowNeuronsWork/','description':'Realistic 3D animation describing neurons'},
        {"title": 'Phonics', "style": 'Animation & Artwork Development', "thumbnail_url": 'img37.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Eng_Video_V03/Eng_video_v03/index.html','description':'Teaching phonics'},
        {"title": 'Circumference', "style": 'Animation & Artwork Development', "thumbnail_url": 'img39.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Marashall_Cavendish/Circumference_of_a_Circle-Discover/DS_Maths_G6_04_01_D_2/','description':'Concept of circumference of a circle for primary grade'},

        # Technology
        {"title": 'Geometry Tool', "style": 'Technology', "thumbnail_url": 'img25.png', "course_url": 'build8/app.html','description':'Open ended geometry tool'},
        {"title": 'Classroom Helper', "style": 'Technology', "thumbnail_url": 'img40.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Klett_Classroom/index.html','description':'An application having various tools to assist teachers in effective handling of classroom'},
        # AR/VR
        {"title": 'VR Based Learning', "style": 'Technology', "thumbnail_url": 'img44.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Delta_Air_1.2/index.html','description':'Using VR to train the flight crew'},

        # Language Learning
        {"title": 'English Words', "style": 'Language Learning', "thumbnail_url": 'img33.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Animation/1%20G6_P2_U5_L1_learning_1/','description':'Usage and meaning of English words in real life scenario.'},
         {"title": 'English Words', "style": 'Language Learning', "thumbnail_url": 'img38.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Animation/G9_P2_U9_L1_RP_A/','description':'Usage and meaning of English words in real life scenario.'},
         {"title": 'Phonics', "style": 'Language Learning', "thumbnail_url": 'img37.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Eng_Video_V03/Eng_video_v03/index.html','description':'Teaching phonics'},
        {"title": 'CLE Grrr..on n aime', "style": 'Language Learning', "thumbnail_url": 'img46.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CLE_U3_L2_Grr_v3/index.html','description':'Pre-primary songs in French.'},
        {"title": 'ELT Word Identification', "style": 'Language Learning', "thumbnail_url": 'img48.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/her/episode_36_segment_3/','description':'Listen to the sound and select the correct word'},
        {"title": 'Short and Long', "style": 'Language Learning', "thumbnail_url": 'img49.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/ArbInteractivity03_v07/Arabic_interactivity_03/index.html','description':'Listen and look at the words and sort them as long and short sounds.'},
        # {"title": 'Pancreas_3D model', "style": 'Animation & Artwork Development', "thumbnail_url": 'img52.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/3D_Object/?organ=pancreas_new','description':'none'},
        {"title": 'Heart', "style": 'Animation & Artwork Development', "thumbnail_url": 'img50.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/3D_Object/?organ=heart_new','description':'Interactive 3D model of Heart'},
        # {"title": 'Kidney_3D model', "style": 'Animation & Artwork Development', "thumbnail_url": 'img51.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/3D_Object/?organ=kidney_new','description':'none'},
        
        
        {"title": 'Classroom Management', "style": 'Digital Lesson Development', "thumbnail_url": 'img53.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/teacher/005_tt_002_core','description':'Teacher training course on classroom management'},
        {"title": 'Writing using evidence from text', "style": 'Digital Lesson Development', "thumbnail_url": 'img54.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Writing using evidence from text/ccr2_mod_1/index.html','description':'Teaching writing using evidence from text'},

        # Animation & Artwork Development
        {"title": 'Plate tectonics', "style": 'Klett', "thumbnail_url": 'img14.png', "course_url": 'build5/app.html','description':'none'},
        {"title": 'Ray Tracing Lenses', "style": 'Klett', "thumbnail_url": 'img15.png', "course_url": 'build6/app.html','description':'none'},
        {"title": 'Balancing Chemical Equations', "style": 'Klett', "thumbnail_url": 'img18.png', "course_url": 'build3/app.html','description':'Balancing equation by increasing/decreasing no. of moelcules'},
        {"title": 'Alkaline metals and water', "style": 'Klett', "thumbnail_url": 'img19.png', "course_url": 'build4/app.html','description':'Explore the change of pH of water when mixed with different alkaline metals'},
        {"title": 'Types of teeth', "style": 'Klett', "thumbnail_url": 'img22.png', "course_url": 'build7/app.html','description':'Learn teeth type of different animals and how it correlates to their nutrition source'},
        
       
        {"title": 'Classroom Management', "style": 'Professional Education', "thumbnail_url": 'img53.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/teacher/005_tt_002_core','description':'Teacher training course on classroom management'},
        {"title": 'Science Book', "style": 'Professional Education', "thumbnail_url": 'img7.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/teacher/002_tt_002_sub/','description':'Digital Science book for teacher training'},

        # {"title": 'Sadlier Build a Sentence', "style": 'Accessibility', "thumbnail_url": 'img45.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Build_a_Sentence/','description':'none'},
        {"title": 'Word game', "style": 'Accessibility', "thumbnail_url": 'img57.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Sadlier/Crossword/Responsive_Beta/R3/index.html','description':'none'},   
        # {"title": 'Construct equilateral polygons (polygons)', "style": 'Accessibility', "thumbnail_url": 'img56.png', "course_url": 'build9/app.html','description':'none'},
        {"title": 'Word game', "style": 'Accessibility', "thumbnail_url": 'img28.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Sadlier/Sadlier_VWBasketball/R1/index.html','description':'A game designed to read the clue and guess the word by selecting appropriate letters'},

        {"title": 'Echolocation in bats', "style": 'Klett', "thumbnail_url": 'img58.png', "course_url": 'build10/app.html','description':'none'},

        {"title": 'Mass Spectometry', "style": 'Klett', "thumbnail_url": 'img59.png', "course_url": 'build11/app.html','description':'none'},



]


        for course_data in courses_data:
            # Check if the course already exists in the database by title, style, and course_url
            existing_course = Course.query.filter_by(title=course_data["title"], style=course_data["style"], course_url=course_data["course_url"]).first()

            if not existing_course:
                # Create and add the course if it does not exist
                new_course = Course(**course_data)
                db.session.add(new_course)

        db.session.commit()

if __name__ == '__main__':
    init_db()
