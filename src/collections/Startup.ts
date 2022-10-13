import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/admin";

export const Startup: CollectionConfig = {
    slug: "startup",
    admin: {
        useAsTitle: "business_name",
    },
    access: {
        read: () => true, //@todo: should be logged in
        create: () => true, //@todo: should be logged in
        update: isAdmin,
        delete: isAdmin,
    },
    fields: [
        {
            name: "business_name",
            type: "text",
            required: true,
        },
        {
            name: "user",
            type: "relationship",
            relationTo: "users",
        },
        {
            name: "investors",
            type: "relationship",
            relationTo: "investor",
            hasMany: true,
        },
        // {
        //     name: "company_logo",
        //     type: "upload",
        //     relationTo: "media",
        // },
        {
            name: "business_model",
            type: "richText",
            required: true,
        },
        {
            name: "service",
            type: "richText",
            required: true,
        },
        {
            name: "traction",
            type: "richText",
            required: true,
        },
        {
            name: "revenue",
            type: "number",
            required: true,
        },
        {
            name: "number_of_employees",
            //@todo - this should be a select field
            type: "number",
            required: true,
            min: 1,
            defaultValue: 1,
        },
        {
            name: "why_raise_comunity",
            type: "richText",
            required: true,
        },
        {
            name: "existing_commitments",
            type: "checkbox",
            defaultValue: false,
            required: true,
        },
        {
            name: "percentage_to_be_raised",
            type: "number",
            min: 0,
            max: 100,
            defaultValue: 0,
        },
        // {
        //     name: "pitch",
        //     type: "upload",
        //     relationTo: "media",
        // },
        {
            name: "material_information",
            type: "richText",
            required: true
        },

    ],
}