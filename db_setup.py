from app import app
from extension import db
from models import Course

def init_db():
    with app.app_context():
        db.create_all()

        # Define the list of courses
        courses_data = [
        {"title": 'Klett Classroom Tool', "style": 'Klett', "thumbnail_url": 'img40.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Klett_Classroom/index.html','description':'Scenario based animation explaining English words for non english speaking students.'},
        {"title": 'Construction tool', "style": 'Klett', "thumbnail_url": 'img25.png', "course_url": 'build8/app.html','description':'Usage and meaning of English words in real life scenario.'},

        {"title": 'Construct parallelogram', "style": 'Klett', "thumbnail_url": 'img24.png', "course_url": 'build1/app.html'},
        {"title": 'Display Quantities ', "style": 'Klett', "thumbnail_url": 'img9.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Klett_Primary_Math/demo_0_display_quantities/index.html'},
        
        {"title": 'Canon - Projectile Motion', "style": 'Klett', "thumbnail_url": 'img16.png', "course_url": 'build2/app.html'},

        {"title": 'HMS', "style": 'e-Book Development', "thumbnail_url": 'img1.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/002_hms/'},
        {"title": 'Read Aloud', "style": 'e-Book Development', "thumbnail_url": 'img2.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Encyclopaedia_Britannica/bdl-shapes/'},
        {"title": 'Spanish English', "style": 'e-Book Development', "thumbnail_url": 'img3.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Twin_sister/index.html'},
        {"title": 'ePub', "style": 'e-Book Development', "thumbnail_url": 'img60.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CA-ePub_Indesign%20(1)/index.html'},


        {"title": 'Why do plants grow', "style": 'Digital Lesson Development', "thumbnail_url": 'img4.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/conversion/005_sf/'},
        {"title": 'Mass and Weight', "style": 'Simulations', "thumbnail_url": 'img17.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/To_Client/Mass_and_Weight/Maintenance/Mass_and_Weight/'},
        {"title": 'Pepsico Game', "style": 'Games', "thumbnail_url": 'img26.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Pepsico%20game%20development/'},
        {"title": 'CLE U0 L2', "style": 'Animation & Artwork Development', "thumbnail_url": 'img30.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CLE_U0_L2_Bonjour_v3/index.html'},
        {"title": 'Sadlier Build a Sentence', "style": 'Language Learning', "thumbnail_url": 'img45.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Build_a_Sentence/'},


        {"title": 'Ebook Student Dashboard', "style": 'Technology', "thumbnail_url": 'img42.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/Others/PL_Application_ipad.mp4'},
        {"title": 'Ebook Authoring Platform', "style": 'Technology', "thumbnail_url": 'img43.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/Others/PL_Object_Editor_ipad.mp4'},
        # Digital Lesson Development
        {"title": 'Enter quantities up to 6/10', "style": 'Accessibility', "thumbnail_url": 'img55.png', "course_url": 'https://webhost.mitrmedia.com/ftp/mitr_sims/Accessibility/Klett/Primary_Practice/b1/practice_1_Enter_quantities_up_to_6_10/'},
        {"title": 'Writing using evidence from text', "style": 'Professional Education', "thumbnail_url": 'img54.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Writing using evidence from text/index.html'},



        {"title": 'Why do plants grow', "style": 'Digital Lesson Development', "thumbnail_url": 'img4.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/conversion/005_sf/'},
        {"title": 'LSAT', "style": 'Digital Lesson Development', "thumbnail_url": 'img6.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Barrons/LSAT/'},
        {"title": 'Teacher Training subject module', "style": 'Digital Lesson Development', "thumbnail_url": 'img7.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/teacher/002_tt_002_sub/'},
        {"title": 'Add Using Arrays', "style": 'Digital Lesson Development', "thumbnail_url": 'img8.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/pheonix-project/arrays/'},
        {"title": 'Display Quantities ', "style": 'Digital Lesson Development', "thumbnail_url": 'img9.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Klett_Primary_Math/demo_0_display_quantities/index.html'},
        {"title": 'Ask and Answer questions', "style": 'Digital Lesson Development', "thumbnail_url": 'img10.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/pheonix-project/ask_ans/'},
        {"title": 'Math Interactivity', "style": 'Digital Lesson Development', "thumbnail_url": 'img11.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Math_Interactivity_v04/Math_interactivity_04/index.html'},
        {"title": 'Science Interactivity', "style": 'Digital Lesson Development', "thumbnail_url": 'img12.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Sci_Interactivity_v03/Sci_interactivity_v03/index.html'},
        {"title": 'Enter quantities up to 6/10', "style": 'Digital Lesson Development', "thumbnail_url": 'img55.png', "course_url": 'https://webhost.mitrmedia.com/ftp/mitr_sims/Accessibility/Klett/Primary_Practice/b1/practice_1_Enter_quantities_up_to_6_10/'},

        # Simulations
        {"title": 'Solar Eclipse and Lunar Solar Eclipse', "style": 'Simulations', "thumbnail_url": 'img13.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/To_Client/Solar_Eclipse_and_Lunar_Eclipse/Gold3/Solar_Eclipse_and_Lunar_Eclipse/'},
        {"title": 'Construct equilateral polygons (polygons)', "style": 'Simulations', "thumbnail_url": 'img56.png', "course_url": 'build9/app.html'},
        {"title": 'Plate tectonics', "style": 'Simulations', "thumbnail_url": 'img14.png', "course_url": 'build5/app.html'},
        {"title": 'Ray Tracing Lenses', "style": 'Simulations', "thumbnail_url": 'img15.png', "course_url": 'build6/app.html'},
        {"title": 'Canon - Projectile Motion', "style": 'Simulations', "thumbnail_url": 'img16.png', "course_url": 'build2/app.html'},
        
        {"title": 'Balancing Chemical Equations', "style": 'Simulations', "thumbnail_url": 'img18.png', "course_url": 'build3/app.html'},
        {"title": 'Alkaline metals and water', "style": 'Simulations', "thumbnail_url": 'img19.png', "course_url": 'build4/app.html'},
        {"title": 'Measuring Volume', "style": 'Simulations', "thumbnail_url": 'img20.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/To_Client/Measuring_Volume/Maintenance/Measuring_Volume/'},
        {"title": 'Trophic level and ecological pyramides', "style": 'Simulations', "thumbnail_url": 'img21.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/To_Client/Trophic_Levels/Gold2/Trophic_Levels/'},
        {"title": 'Types of teeth', "style": 'Simulations', "thumbnail_url": 'img22.png', "course_url": 'build7/app.html'},
        {"title": 'Digestive systems', "style": 'Simulations', "thumbnail_url": 'img23.png', "course_url": 'https://webhost.mitrmedia.com/ftp/el_gettersetter/demo/?1050'},
        {"title": 'Construct parallelogram', "style": 'Simulations', "thumbnail_url": 'img24.png', "course_url": 'build1/app.html'},
        {"title": 'Construction tool', "style": 'Simulations', "thumbnail_url": 'img25.png', "course_url": 'build8/app.html'},

        # Games
        {"title": 'Beer Game', "style": 'Games', "thumbnail_url": 'img27.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Beer_Game/index.html'},
        {"title": 'ELT Basketball', "style": 'Games', "thumbnail_url": 'img28.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Sadlier/Sadlier_VWBasketball/R1/index.html'},
        {"title": 'Turbo Chickens', "style": 'Games', "thumbnail_url": 'img29.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Math_Game_v03/Math_game_v03/index.html'},
        {"title": 'Sadlier - ELT-Crossword', "style": 'Games', "thumbnail_url": 'img57.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Sadlier/Crossword/Responsive_Beta/R3/index.html'},

        # Animation & Artwork Development
        {"title": 'CLE U0 L2', "style": 'Animation & Artwork Development', "thumbnail_url": 'img30.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CLE_U0_L2_Bonjour_v3/index.html'},
        {"title": 'CLE U6 L2', "style": 'Animation & Artwork Development', "thumbnail_url": 'img31.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CLE_U6_L2_QUEL_TEMPS_v3_Low%20Res/index.html'},
        {"title": 'CLE U3 L2', "style": 'Animation & Artwork Development', "thumbnail_url": 'img32.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CLE_U3_L2_Grr_v3/index.html'},
        {"title": 'ELT Words', "style": 'Animation & Artwork Development', "thumbnail_url": 'img33.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Animation/1%20G6_P2_U5_L1_learning_1/'},
        {"title": 'Learn Primary Multiplication', "style": 'Animation & Artwork Development', "thumbnail_url": 'img34.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Learn_Primary/Multiplication%20Y5L5/index.html'},
        {"title": 'Pygmalion Effect', "style": 'Animation & Artwork Development', "thumbnail_url": 'img35.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/corporate/pygmalion_23_07_2018_edited/'},
        {"title": 'Neurons', "style": 'Animation & Artwork Development', "thumbnail_url": 'img36.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Animation/HowNeuronsWork/'},
        {"title": 'Cats Big trap', "style": 'Animation & Artwork Development', "thumbnail_url": 'img37.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Eng_Video_V03/Eng_video_v03/index.html'},
        {"title": 'ELT Recycle', "style": 'Animation & Artwork Development', "thumbnail_url": 'img38.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Animation/G9_P2_U9_L1_RP_A/'},
        {"title": 'Circumference of a Circle Discover', "style": 'Animation & Artwork Development', "thumbnail_url": 'img39.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Marashall_Cavendish/Circumference_of_a_Circle-Discover/DS_Maths_G6_04_01_D_2/'},

        # Technology
        {"title": 'Klett Classroom Tool', "style": 'Technology', "thumbnail_url": 'img40.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Klett_Classroom/index.html'},
        {"title": 'Klett Geometry Tool', "style": 'Technology', "thumbnail_url": 'img41.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/geometry_tool/index.html'},
        

        # AR/VR
        {"title": 'AR/Vr Delta Air', "style": 'Technology', "thumbnail_url": 'img44.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Delta_Air_1.2/index.html'},

        # Language Learning
        {"title": 'French CLE', "style": 'Language Learning', "thumbnail_url": 'img46.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/CLE_U3_L2_Grr_v3/index.html'},
        {"title": 'Display Quantities ', "style": 'Language Learning', "thumbnail_url": 'img47.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Klett_Primary_Math/demo_0_display_quantities/index.html'},
        {"title": 'English Headsprout', "style": 'Language Learning', "thumbnail_url": 'img48.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/her/episode_36_segment_3/'},
        {"title": 'Arabic Alef', "style": 'Language Learning', "thumbnail_url": 'img49.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/ArbInteractivity03_v07/Arabic_interactivity_03/index.html'},
        {"title": 'Pancreas_3D model', "style": 'Animation & Artwork Development', "thumbnail_url": 'img52.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/3D_Object/?organ=pancreas_new'},
        {"title": 'Heart_3D model', "style": 'Animation & Artwork Development', "thumbnail_url": 'img50.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/3D_Object/?organ=heart_new'},
        {"title": 'Kidney_3D model', "style": 'Animation & Artwork Development', "thumbnail_url": 'img51.png', "course_url": 'https://webhost.mitrmedia.com/ftp/aksorn/3D_Object/?organ=kidney_new'},
        
        
        {"title": 'Teacher Training_Classroom management', "style": 'Digital Lesson Development', "thumbnail_url": 'img53.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/teacher/005_tt_002_core'},
        {"title": 'Writing using evidence from text', "style": 'Digital Lesson Development', "thumbnail_url": 'img54.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Writing using evidence from text/index.html'},

        # Animation & Artwork Development
        {"title": 'Plate tectonics', "style": 'Klett', "thumbnail_url": 'img14.png', "course_url": 'build5/app.html'},
        {"title": 'Ray Tracing Lenses', "style": 'Klett', "thumbnail_url": 'img15.png', "course_url": 'build6/app.html'},
        {"title": 'Balancing Chemical Equations', "style": 'Klett', "thumbnail_url": 'img18.png', "course_url": 'build3/app.html'},
        {"title": 'Alkaline metals and water', "style": 'Klett', "thumbnail_url": 'img19.png', "course_url": 'build4/app.html'},
        {"title": 'Types of teeth', "style": 'Klett', "thumbnail_url": 'img22.png', "course_url": 'build7/app.html'},
        
        {"title": 'Construction tool', "style": 'Klett', "thumbnail_url": 'img25.png', "course_url": 'build8/app.html'},
       
        {"title": 'Teacher Training_Classroom management', "style": 'Professional Education', "thumbnail_url": 'img53.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/teacher/005_tt_002_core'},
        {"title": 'Teacher Training subject module', "style": 'Professional Education', "thumbnail_url": 'img7.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/teacher/002_tt_002_sub/'},

        {"title": 'Sadlier Build a Sentence', "style": 'Accessibility', "thumbnail_url": 'img45.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Build_a_Sentence/'},
        {"title": 'Sadlier - ELT-Crossword', "style": 'Accessibility', "thumbnail_url": 'img57.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Sadlier/Crossword/Responsive_Beta/R3/index.html'},   
        {"title": 'Construct equilateral polygons (polygons)', "style": 'Accessibility', "thumbnail_url": 'img56.png', "course_url": 'build9/app.html'},
        {"title": 'Canon - Projectile Motion', "style": 'Accessibility', "thumbnail_url": 'img16.png', "course_url": 'build2/app.html'},
        {"title": 'ELT Basketball', "style": 'Accessibility', "thumbnail_url": 'img28.png', "course_url": 'https://demos.mitrmedia.com/demo-zip/demo/Sadlier/Sadlier_VWBasketball/R1/index.html'},

        {"title": 'Echolocation in bats', "style": 'Simulations', "thumbnail_url": 'img58.png', "course_url": 'build10/app.html'},
        {"title": 'Mass Spectometry', "style": 'Simulations', "thumbnail_url": 'img59.png', "course_url": 'build11/app.html'},

        {"title": 'Echolocation in bats', "style": 'Klett', "thumbnail_url": 'img58.png', "course_url": 'build10/app.html'},

        {"title": 'Mass Spectometry', "style": 'Klett', "thumbnail_url": 'img59.png', "course_url": 'build11/app.html'},


        # {"title": 'Canon - Projectile Motion', "style": 'Klett', "thumbnail_url": 'img16.png', "course_url": 'build2/app.html'}
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
