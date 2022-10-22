/*

Offer different ways of collecting/displaying age.
Regardless of the method chosen, we store it as a date (which may not be an exact date of birth).

 */

import dob from './dob';
import grouping from './groups';

export default event => {
    try {
        switch (event.customQuestions.ageWidgets) {
            case 'dob':
                return dob;
            case 'groupings':
                return grouping
        }
        return dob;
    }
    catch (e) {
        return dob;
    }

};