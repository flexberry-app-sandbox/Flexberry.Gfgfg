﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Gfgfg
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Наслед.
    /// </summary>
    // *** Start programmer edit section *** (Наслед CustomAttributes)

    // *** End programmer edit section *** (Наслед CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НаследE", new string[] {
            "тит as \'Тит\'"})]
    [View("НаследL", new string[] {
            "тит as \'Тит\'"})]
    public class Наслед : ICSSoft.STORMNET.DataObject
    {
        
        private string fтит;
        
        // *** Start programmer edit section *** (Наслед CustomMembers)

        // *** End programmer edit section *** (Наслед CustomMembers)

        
        /// <summary>
        /// тит.
        /// </summary>
        // *** Start programmer edit section *** (Наслед.тит CustomAttributes)

        // *** End programmer edit section *** (Наслед.тит CustomAttributes)
        [StrLen(255)]
        public virtual string тит
        {
            get
            {
                // *** Start programmer edit section *** (Наслед.тит Get start)

                // *** End programmer edit section *** (Наслед.тит Get start)
                string result = this.fтит;
                // *** Start programmer edit section *** (Наслед.тит Get end)

                // *** End programmer edit section *** (Наслед.тит Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Наслед.тит Set start)

                // *** End programmer edit section *** (Наслед.тит Set start)
                this.fтит = value;
                // *** Start programmer edit section *** (Наслед.тит Set end)

                // *** End programmer edit section *** (Наслед.тит Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НаследE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НаследE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НаследE", typeof(IIS.Gfgfg.Наслед));
                }
            }
            
            /// <summary>
            /// "НаследL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НаследL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НаследL", typeof(IIS.Gfgfg.Наслед));
                }
            }
        }
    }
}
