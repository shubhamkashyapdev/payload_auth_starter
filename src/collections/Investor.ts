import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/admin";

export const Investor: CollectionConfig = {
    slug: "investor",
    admin: {
        useAsTitle: "full_name"
    },
    access: {
        create: () => true, //@todo: should be logged in
        read: () => true, //@todo: should be logged in
        update: isAdmin,
        delete: isAdmin
    },
    fields: [
        {
            name: "full_name",
            type: "text",
            required: true,
        },
        {
            name: "user",
            type: "relationship",
            relationTo: "users",
        },
        {
            name: "dob",
            type: "date",
            required: true,

        },
        {
            name: "designation",
            type: "text",
            required: true,
        },
        {
            name: "personal_email",
            type: "text",
            required: true,
        },
        {
            name: "company_address",
            type: "text",
            required: true,
        },
        {
            name: "nationality",
            type: "text",
            required: true,
        },
        {
            name: "pan_number",
            type: "text",
            required: true,
        },
        {
            name: "aadhar_number",
            type: "text",
            required: true,
        },
        {
            name: "experience_in_investing",
            type: "checkbox",
            defaultValue: false,
            required: true,
        },
        {
            name: "is_part_angel_investing",
            type: "checkbox",
            defaultValue: false,
            required: true,
        },
        {
            name: "area_of_expertise",
            type: "array",
            fields: [
                {
                    name: "expertise",
                    type: "text",

                }
            ],
        },
        {
            name: "agree_to_pay_2_percent",
            type: "checkbox",
            required: true,
        },
        {
            name: "agree_term_and_condition",
            type: "checkbox",
            defaultValue: false,
            required: true,
        }

    ],
}