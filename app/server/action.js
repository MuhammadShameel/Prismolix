"use server";

export async function sendFormData(formData) {
    formData.append("_wpcf7_unit_tag", "d507871");
    try {
        const response = await fetch(
            `https://prismolix.wasmer.app/wp-json/contact-form-7/v1/contact-forms/88/feedback`,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                },
                body: formData,
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Failed to submit form:", error);

        return {
            message: "An unexpected error has occurred, please try again.",
            status: "error",
        };
    }
}

